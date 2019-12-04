import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-animestemporada',
  templateUrl: './animestemporada.page.html',
  styleUrls: ['./animestemporada.page.scss'],
})
export class AnimestemporadaPage implements OnInit {
  public anime;
  temporada: firebase.firestore.Query;
  constructor(
    public navCtrl : NavController,
    private afs: AngularFirestore,
    ){
      this.temporada = this.afs.collection('temporada').ref.orderBy("nome").limit(5);
      this.temporada.get()
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
