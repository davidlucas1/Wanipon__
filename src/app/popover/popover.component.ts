import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  public marrapa;
  public filtro = [[
  {nome : "ação", selected : false},
  {nome : "seinen", selected : false},
  {nome : "shounen", selected : false},
  {nome : "aventura", selected : false},
  {nome : "romance", selected : false},
  {nome : "sobrenatural", selected : false},
  {nome : "terror", selected : false}],
  [
    {nome : "2013", selected : false},
    {nome : "2014", selected : false},
    {nome : "2015", selected : false},
    {nome : "2016", selected : false},
    {nome : "2017", selected : false},
    {nome : "2018", selected : false},
    {nome : "2019", selected : false}],
    [
      {nome : "ufotable", selected : false},
      {nome : "kyoto animation", selected : false},
      {nome : "trigger", selected : false},
      {nome : "a-1 pictures", selected : false},
      {nome : "pierrot", selected : false},
      {nome : "toei", selected : false},
      {nome : "mad house", selected : false}]
]

  constructor(private data : DataService) {
    this.data.currentMessage.subscribe(animemassa => this.marrapa = animemassa); console.log(this.marrapa);
     this.marcar();
  }
  filtrar(sdgsd,num){
    let n = num;
    let filtro = sdgsd.detail.value;
    let aos = [];
    let filtroNovo = []
    for(let a = 0; a < this.filtro[n].length; a++){
      let ver = false;
      for(let i = 0; i < filtro.length; i++){
        if(filtro[i] == this.filtro[n][a].nome){
          aos.push({nome : this.filtro[n][a].nome, selected : true}); ver = true;
        }
        
      }
      if(ver == false){aos.push({nome : this.filtro[n][a].nome, selected : false});}
    }
    for(let i = 0; i < this.marrapa.length; i++){
      let mesmaSelecao = false;
      for(let a = 0; a < aos.length; a++){
        if(aos[a].nome == this.marrapa[i]){
          mesmaSelecao = true;
          if(aos[a].selected == true){
            filtroNovo.push(this.marrapa[i])
          }
        }
      }
      if(mesmaSelecao == false){
        filtroNovo.push(this.marrapa[i]);
      }
    }
    for(let f = 0; f < filtro.length; f++){
      let existe = false;
      for(let o = 0; o < filtroNovo.length; o++){
        if(filtro[f] == filtroNovo[o]){
          existe = true;
        }
      }
      if(existe == false){filtroNovo.push(filtro[f])}
    }
     this.data.changeMessage(filtroNovo)
  }

  marcar(){
    for(let i = 0; i < this.filtro.length; i++){
      for(let b = 0; b < this.filtro[i].length; b++){
      let marrapai = false;
      for(let a = 0; a < this.marrapa.length; a++){
        if(this.filtro[i][b].nome == this.marrapa[a]){
          marrapai = true;
          break;
        }
      }
    if(marrapai == true){
      this.filtro[i][b].selected = true;
      
    }}
    }
  }

ngOnInit() {}

}
