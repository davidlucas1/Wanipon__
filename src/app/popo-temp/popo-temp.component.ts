import { Component, OnInit } from '@angular/core';
import { DataTempService } from '../service/data-temp.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-popo-temp',
  templateUrl: './popo-temp.component.html',
  styleUrls: ['./popo-temp.component.scss'],
})
export class PopoTempComponent implements OnInit {
  public marrapa;
  public filtro = [[
  {nome : "Ação", selected : false},
  {nome : "Seinen", selected : false},
  {nome : "Shounen", selected : false},
  {nome : "Aventura", selected : false},
  {nome : "Romance", selected : false},
  {nome : "Sobrenatural", selected : false},
  {nome : "Terror", selected : false}],
  [
    {nome : "2013", selected : false},
    {nome : "2014", selected : false},
    {nome : "2015", selected : false},
    {nome : "2016", selected : false},
    {nome : "2017", selected : false},
    {nome : "2018", selected : false},
    {nome : "2019", selected : false}],
    [
      {nome : "Ufotable", selected : false},
      {nome : "Kyoto Animation", selected : false},
      {nome : "Trigger", selected : false},
      {nome : "A-1 Pictures", selected : false},
      {nome : "Pierrot", selected : false},
      {nome : "Toei", selected : false},
      {nome : "Mad House", selected : false}]
]
public filtroBackup = this.filtro;

  constructor(private data : DataTempService) {
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
  deletarFiltro(){
    let a = [];
    this.filtro = this.filtroBackup;
    this.data.changeMessage(a);
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
