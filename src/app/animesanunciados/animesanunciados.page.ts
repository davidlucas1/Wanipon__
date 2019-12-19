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

  public otorapa;
  public barraPesquisa;
  public pesquisa;
  public listaBackup;

  public lista;
  anunciado: firebase.firestore.Query;

  constructor(
    public navCtrl : NavController,
    private router : Router,
    private afs: AngularFirestore,
    ){

      this.barraPesquisa = false;

      this.anunciado = this.afs.collection('anunciados').ref.orderBy("nome").limit(5);
      this.anunciado.get()
      .then(dado=>{
        
        this.lista = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const perfil = docs.data().perfil;
            this.lista.push({id,nome,perfil})
        })
        this.listaBackup = this.lista;
        //console.log(this.anime);
      });
    }
   navegar(pagina){
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

  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }
  ngOnInit() {
  }


}
