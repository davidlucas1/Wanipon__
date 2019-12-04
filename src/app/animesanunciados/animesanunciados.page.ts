import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-animesanunciados',
  templateUrl: './animesanunciados.page.html',
  styleUrls: ['./animesanunciados.page.scss'],
})
export class AnimesanunciadosPage implements OnInit {

  public anime;
  anunciado: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    private router : Router,
    private afs: AngularFirestore,
    ){
      this.anunciado = this.afs.collection('anunciados').ref.orderBy("nome").limit(5);
      this.anunciado.get()
      .then(dado=>{
        
        this.anime = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const perfil = docs.data().perfil;
            this.anime.push({id,nome,perfil})
        })
        //console.log(this.anime);
      });
    }
   navegar(pagina){
    this.navCtrl.navigateForward(pagina);
  }
  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }
  ngOnInit() {
  }


}
