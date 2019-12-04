import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sugestaoanime',
  templateUrl: './sugestaoanime.page.html',
  styleUrls: ['./sugestaoanime.page.scss'],
})
export class SugestaoanimePage implements OnInit {

  public lista;
  ordem: firebase.firestore.Query;

  constructor(public navCtrl : NavController, private afs: AngularFirestore) {
    this.ordem = this.afs.collection('eventos').ref.orderBy("nome").limit(5);
    this.ordem.get()
    .then(dado=>{
      
      this.lista = [];
      dado.forEach(docs=>{
        //console.log(docs.data())

        const data = docs.data();
        const id = docs.id;
        const nome = docs.data().nome;
        const cidade = docs.data().cidade;
        const estado = docs.data().estado;
        const logradouro = docs.data().logradouro;
        const numero = docs.data().numero;
        const bairro = docs.data().bairro;
          this.lista.push(new Imovel(nome,logradouro,numero,bairro,cidade,estado))


      })

      console.log(this.lista);
    }); }
  
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  

  ngOnInit() {
  }

}
export class Imovel{
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  mapa: string;

    constructor(nome: string, logradouro: string, numero: string, bairro: string, cidade: string, estado: string){
      this.nome = nome;
      this.logradouro= logradouro;
      this.numero= numero;
      this.bairro= bairro;
      this.cidade= cidade;
      this.estado= estado;
      this.mapa= this.getMapa();
    }

    private getEndereco(){
      return this.logradouro + ", " +this.numero + ", " + this.bairro + ", " + this.cidade + ", " + this.estado;
    }

    private getMapa(){
      //return "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyAc2edgE9IHavryuQUIPWSprQWfVflW2Js"
      return "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=600x300&markers=color:blue|"+this.getEndereco()+"&key=AIzaSyAc2edgE9IHavryuQUIPWSprQWfVflW2Js"
    }
  }