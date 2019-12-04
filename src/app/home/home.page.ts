import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public semanais;
  ultimos: firebase.firestore.Query;
  buscar: firebase.auth.IdTokenResult;

  constructor(
    public navCtrl : NavController,
    private router : Router,
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    ){
      //CODIGO PARA ULTIMOS EPISODIOS LANCADOS
      this.ultimos = this.afs.collection('ultimos').ref.orderBy("data","desc").limit(5);
      this.ultimos.get()
      .then(dado=>{
        
        this.semanais = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
            this.semanais.push({id, ...data})
        })

        //console.log(this.semanais);
      });
    }
   navegar(pagina){
    this.navCtrl.navigateForward(pagina);
  }
  
  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

    

}
