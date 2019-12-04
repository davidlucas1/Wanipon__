import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-animeinfo',
  templateUrl: './animeinfo.page.html',
  styleUrls: ['./animeinfo.page.scss'],
})
export class AnimeinfoPage implements OnInit {

  public id;
  public idea;
  public ideaID;
  buscar: firebase.firestore.Query;
  usuario;
  public addUser ;
  AniDesNome;
  

  constructor( 
    public navCtrl : NavController,
    private store: AngularFirestore,
    private route: ActivatedRoute,
    private afa: AngularFireAuth,
    ){
      this.id = this.route.snapshot.paramMap.get('id');
      
      this.store.collection("lista").doc(this.id).get().toPromise()
      .then(anime=>{
        this.idea=anime.data();
      });

      //CODIGO PARA PEGAR O ID DO USUARIO
      var user = afa.auth.currentUser.uid;
        if (user){
          this.usuario=user
          //console.log(user)
        }
        else {
        console.log("Sem usuário logado")
      };

    }
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  add(){
    this.store.collection("usuarios/"+this.usuario+"/animesDesejados").doc(this.id).set({
      nome: this.idea.nome,
      baner: this.idea.baner
    })
    .then(
      function presentAlert(){
      const alert = document.createElement('ion-alert');
      alert.header = 'ANIME ADICIONADO A SUA LISTA DE INTERESSES';
      alert.buttons = ['OK'];
    
      document.body.appendChild(alert);
      return alert.present();
      })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  
  }

  ngOnInit() {}

}

