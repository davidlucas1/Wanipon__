import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-serieordenada',
  templateUrl: './serieordenada.page.html',
  styleUrls: ['./serieordenada.page.scss'],
})
export class SerieordenadaPage implements OnInit {
  
  public idordem;
  public id;

  public ordem;
  ordenados: firebase.firestore.Query;

  public listOrdem;
  listFinal: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    ){

      //PARA PEGAR ID DO ANIME
      this.id = this.route.snapshot.paramMap.get('id');

      //PARA PEGAR ID DA ORDEM
      this.idordem = this.route.snapshot.paramMap.get('idordem');

      //PARA PEGAR O NOME DA SERIE DE ANIME
      this.ordenados = this.afs.collection('ordenados').ref.orderBy("nome").limit(5);
      this.ordenados.get()
      .then(dado=>{
        
        this.ordem = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
            this.ordem.push({id,nome})
        })
        //console.log(this.anime);
      });

      //PARA PERGAR AS INFORMAÇÕES DOS ANIMES QUE TEM NA SERIE
      this.listFinal = this.afs.collection("ordenados/"+this.idordem+"/series").ref.orderBy("nome").limit(9);
      this.listFinal.get()
      .then(dado=>{
        
        this.listOrdem = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const perfil = docs.data().perfil;
            this.listOrdem.push({id,nome,perfil})
        })
        console.log(this.listOrdem);
      });
      

    }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

  ngOnInit() {
  }

}
