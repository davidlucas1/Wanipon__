import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public otorapa;
  public barraPesquisa;
  public pesquisa;

  public lista;
  public listaBackup;
  ordem: firebase.firestore.Query;
  public arrozal;

  constructor(
    public navCtrl : NavController,
    public popoverController: PopoverController,
    private data: DataService,
    private router : Router,
    private afs: AngularFirestore,
    ) {
     
    this.barraPesquisa = false;

    //CODIGO DA LISTA NORMAL
    this.ordem = this.afs.collection('lista').ref.orderBy("nome").limit(9);
      this.ordem.get()
      .then(dado=>{
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())
          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const baner = docs.data().baner;
          const genero = docs.data().genero;
          const ano = docs.data().ano;
          const estudio = docs.data().estudio;
            this.lista.push({id,nome,baner,genero,ano,estudio})
        })
        this.listaBackup = this.lista
        //console.log(this.lista);
      });



  }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
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
          for(let ltr = 0; ltr < this.lista[i].nome.length; ltr++){
            //console.log(this.lista[i].nome);
          if(this.lista[i].nome.substring(ltr, ltr+(pesquisa.length)) == pesquisa){
            console.log("confirmado")
            alfredo.push(this.lista[i]);
            break;
          }
          }
          }

      }this.barraPesquisa = false;
      this.arrozal = this.lista;
  }}

  ngOnInit() {
    this.data.currentMessage.subscribe(animemassa => this.otorapa = animemassa);
    
  }
  
  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }
}
