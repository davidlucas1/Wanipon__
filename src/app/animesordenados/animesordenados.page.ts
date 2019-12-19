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

  public otorapa;
  public barraPesquisa;
  public pesquisa;

  public lista;
  public listaBackup;
  ordenados: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    private router : Router,
    private afs: AngularFirestore,
    ){

      this.barraPesquisa = false;
      
      this.ordenados = this.afs.collection('ordenados').ref.orderBy("nome").limit(9);
      this.ordenados.get()
      .then(dado=>{
        
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const perfil = docs.data().perfil;
          const sinonimo = docs.data().sinonimo;
            this.lista.push({id,nome,perfil,sinonimo})
        })
        this.listaBackup = this.lista;
        //console.log(this.anime);
      });
    }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
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
          this.lista = alfredo;
      }this.barraPesquisa = false;
  }}

  serieordem(uuid) {
    this.navCtrl.navigateForward(`serieordenada/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

  ngOnInit() {
  }

}
