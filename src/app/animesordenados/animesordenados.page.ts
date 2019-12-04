import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-animesordenados',
  templateUrl: './animesordenados.page.html',
  styleUrls: ['./animesordenados.page.scss'],
})
export class AnimesordenadosPage implements OnInit {

  public ordem;
  ordenados: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    private router : Router,
    private afs: AngularFirestore,
    ){
      this.ordenados = this.afs.collection('ordenados').ref.orderBy("nome").limit(5);
      this.ordenados.get()
      .then(dado=>{
        
        this.ordem = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const perfil = docs.data().perfil;
            this.ordem.push({id,nome,perfil})
        })
        //console.log(this.anime);
      });
    }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  serieordem(uuid) {
    this.navCtrl.navigateForward(`serieordenada/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

  ngOnInit() {
  }

}
