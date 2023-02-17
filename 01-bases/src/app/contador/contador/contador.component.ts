import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong> </h3>


    <button (click)="acumulate(base)" >+ {{base}}</button>
    <span>{{ number }}</span>
    <button (click)="acumulate(-base)" >- {{base}}</button>
    `
})

export class ContadorComponent{
    title : string = 'Contador-App';
    number: number = 10;
    base  : number = 5
  
    acumulate( value:number){
      this.number += value
    }
}