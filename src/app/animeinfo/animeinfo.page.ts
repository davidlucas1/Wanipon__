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

  usuario;

  botaoAdd;

  public lista;
  ordem: firebase.firestore.Query;


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

      //CODIGO DE BUSCAR NA LISTA DO USUARIO
      this.ordem = this.store.collection("usuarios/"+this.usuario+"/animesDesejados").ref.orderBy("nome").limit(9);
      this.ordem.get()
      .then(dado=>{
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())
          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
            this.lista.push({id,nome})
        })
        //console.log(this.lista);

        //CODIGO DE VERIFICAR SE JA ESTA NA LISTA DE DESEJOS
      for(let i = 0; i < this.lista.length; i++){
        if(this.lista[i].id === this.id){
          this.botaoAdd = false;
        } 
      }
      });
     
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
    this.botaoAdd = false;
  }

  delete(){
    this.store.collection("usuarios/"+this.usuario+"/animesDesejados").doc(this.id).delete()
    .then(
      function presentAlert(){
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'alerte';
        alert.header = 'ANIME REMOVIDO DA SUA LISTA DE INTERESSES';
        alert.buttons = ['OK'];
      
        document.body.appendChild(alert);
        return alert.present();
        }
    )
    .catch(function(error) {
      console.error("Error removing document: ", error);
  });
  this.botaoAdd = true;
  }

  ngOnInit(){

  }

}

