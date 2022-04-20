import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valorA: number=0;
  valorB: number=0;
  resultado:number=0;
  
  soma(){
    this.resultado = this.valorA+this.valorB;
  }
  subtracao(){
    this.resultado = this.valorA-this.valorB;
  }
  multiplicacao(){
    this.resultado = this.valorA*this.valorB;
  }
  divisao(){
    this.resultado= this.valorA/this.valorB
  }
  
  


}
