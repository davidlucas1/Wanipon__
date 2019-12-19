import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoTempComponent } from '../popo-temp/popo-temp.component';
import { DataTempService } from '../service/data-temp.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-animestemporada',
  templateUrl: './animestemporada.page.html',
  styleUrls: ['./animestemporada.page.scss'],
})
export class AnimestemporadaPage implements OnInit {

  public otorapa;
  public barraPesquisa;
  public pesquisa;

  public lista;
  public listaBackup;
  temporada: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    public popoverController: PopoverController,
    private data: DataTempService,
    private afs: AngularFirestore,
    ){
      this.barraPesquisa = false;

      this.temporada = this.afs.collection('temporada').ref.orderBy("nome").limit(5);
      this.temporada.get()
      .then(dado=>{
        
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())
          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const perfil = docs.data().perfil;
          const filtro = docs.data().filtro;
          const sinonimo = docs.data().sinonimo;
            this.lista.push({id,nome,perfil,filtro,sinonimo})
        })
        this.listaBackup = this.lista
    this.data.currentMessage.subscribe(animemassa => this.ngMonstro(animemassa));

        //console.log(this.anime);
      });
    }
   navegar(pagina){
    this.navCtrl.navigateForward(pagina);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoTempComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }

  pesquisar(pesquisa){
    if(this.barraPesquisa == false){this.barraPesquisa = true;}
    else{
    this.lista = this.listaBackup;
    if(pesquisa === "" || pesquisa === undefined){this.lista = this.listaBackup; this.barraPesquisa = false}else{

        let alfredo = [];
        for(let i = 0; i < this.lista.length; i++){
          let achou = false;
          for(let ltr = 0; ltr < this.lista[i].nome.length; ltr++){
            //console.log(this.lista[i].nome);
          if(this.lista[i].nome.substring(ltr, ltr+(pesquisa.length)) == pesquisa){
            console.log("confirmado")
            alfredo.push(this.lista[i]);
            achou = true;
            break;
          }
          }
          if(achou == false){
          for(let ltr = 0; ltr < this.lista[i].sinonimo.length; ltr++){
            //console.log(this.lista[i].nome);
          if(this.lista[i].sinonimo.substring(ltr, ltr+(pesquisa.length)) == pesquisa){
            console.log("confirmado")
            alfredo.push(this.lista[i]);
            break;
          }
          }}
          }
          this.lista = alfredo;
      }this.barraPesquisa = false;
  }}

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

  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

  ngOnInit(){
  }

}
