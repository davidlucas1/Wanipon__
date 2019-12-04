import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {
  mensagem = false;
  public mensagens=[{Autor:"Sua Mensagem", mensagem:"Hei, menino! Tá faltando dragon ball na lista dos desenho aí!"},
  {Autor:"Mensagem do Desenvolvedor", mensagem:"Negócio de Dragon Ball rapá anime ruim da perte kkkk"},
  {Autor:"Sua Mensagem", mensagem:"Olha a filha da mãe dessa audácia"},
  {Autor:"Mensagem do Desenvolvedor", mensagem:"Hehe"}
]
mai = this.mensagens.slice().reverse();
pesquisa = "";

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
  enviarmensagem(msg){
    if(this.mensagem == false){this.mensagem = true}
    else{
      if(msg == ""){this.mensagem = false}
      else{this.mensagens.push({Autor:"Sua Mensagem", mensagem:msg});
      this.mensagem = false;
      this.pesquisa = "";
      this.mai = this.mensagens.slice().reverse();
    }
    }
  }

  ngOnInit() {
  }

}
