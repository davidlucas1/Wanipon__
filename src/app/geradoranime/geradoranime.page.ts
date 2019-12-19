import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoGeradorComponent } from '../popo-gerador/popo-gerador.component';
import { DataFiltService } from '../service/data-filt.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-geradoranime',
  templateUrl: './geradoranime.page.html',
  styleUrls: ['./geradoranime.page.scss'],
})
export class GeradoranimePage implements OnInit {

  public otorapa;

  public listaBackup;

  public lista = [];
  animeSorteado;
  sorteio: firebase.firestore.Query;

  constructor(public navCtrl : NavController,
     public popoverController: PopoverController,
     private afs: AngularFirestore,
     private data: DataFiltService,
     ){
       this.animeSorteado = null;

       this.sorteio = this.afs.collection('lista').ref.orderBy("nome");
      this.sorteio.get()
      .then(dado=>{
        
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const baner = docs.data().baner;
          const filtro = docs.data().filtro;
          const sinonimo = docs.data().sinonimo;
            this.lista.push({id,nome,baner,filtro,sinonimo})

        })
        this.listaBackup = this.lista;
        this.data.currentMessage.subscribe(animemassa => this.ngMonstro(animemassa));
        console.log(this.lista);
      });
      }

  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoGeradorComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
sortear(){
  let ani = this.getRandomInt(0, (this.lista.length-1));
  this.animeSorteado = this.lista[ani];
}

ngMonstro(animemassa){this.otorapa = animemassa;if(this.otorapa.length > 0){this.criarFi()}else{this.lista = this.listaBackup;}}

  criarFi(){
    this.lista = this.listaBackup;
    let tempLista = []
    for(let a = 0; a < this.lista.length; a++){
    for(let i = 0; i < this.lista[a].filtro.length; i++){
    if(this.otorapa[0] === this.lista[a].filtro[i]){
    tempLista.push(this.lista[a]);}}}
  
    
    if(this.otorapa.length > 1){
    let novaLista = [];
    for(let an = 0; an < tempLista.length; an++){
    let verificando = false;
    for(let fil = 1; fil < this.otorapa.length; fil++){
    let verFil = false;
    for(let f = 0; f < tempLista[an].filtro.length; f++){
    if(this.otorapa[fil] === tempLista[an].filtro[f]){
    verFil = true;}}

    if(verFil === true){
    verificando = true;}
    else{verificando = false; break}}
  
    
    if(verificando === true){
    novaLista.push(tempLista[an])}
    
    
    this.lista = novaLista;
    }
    }
    else{
    this.lista = tempLista;
    }}


  ngOnInit() {
  }

  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

}
