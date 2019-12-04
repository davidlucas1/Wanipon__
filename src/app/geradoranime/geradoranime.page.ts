import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-geradoranime',
  templateUrl: './geradoranime.page.html',
  styleUrls: ['./geradoranime.page.scss'],
})
export class GeradoranimePage implements OnInit {
  animes = [];
  animeSorteado;
  sorteio: firebase.firestore.Query;

  constructor(public navCtrl : NavController,
     public popoverController: PopoverController,
     private afs: AngularFirestore,
     ){
       this.animeSorteado = null;

       this.sorteio = this.afs.collection('lista').ref.orderBy("nome");
      this.sorteio.get()
      .then(dado=>{
        
        this.animes = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
          const nome = docs.data().nome;
          const baner = docs.data().baner;
            this.animes.push({id,nome,baner})


        })

        console.log(this.animes);
      });
      }

  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
sortear(){
  let ani = this.getRandomInt(0, (this.animes.length-1));
  this.animeSorteado = this.animes[ani];

}

  ngOnInit() {
  }

  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

}
