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

  public anime;
  public lista;
  ordem: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    public popoverController: PopoverController,
    private data: DataService,
    private router : Router,
    private afs: AngularFirestore,
    ) {
    this.barraPesquisa = false;

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

        console.log(this.lista);
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
     this.pesquisa = pesquisa;
      this.barraPesquisa = false;
  }}

  ngOnInit() {
    this.data.currentMessage.subscribe(animemassa => this.otorapa = animemassa);
  }
  
  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }
}
