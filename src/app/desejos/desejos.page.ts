import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-desejos',
  templateUrl: './desejos.page.html',
  styleUrls: ['./desejos.page.scss'],
})
export class DesejosPage implements OnInit {

  usuario;

  public anime;
  public lista;
  ordem: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    private afa: AngularFireAuth,
    private router : Router,
    private afs: AngularFirestore,
    ){
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
      this.ordem = this.afs.collection("usuarios/"+this.usuario+"/animesDesejados").ref.orderBy("nome").limit(9);
      this.ordem.get()
      .then(dado=>{
        
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const baner = docs.data().baner;
            this.lista.push({id,nome,baner})
        })

        //console.log(this.lista);
      });
    }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

}
