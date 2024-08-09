import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name : string = 'David'
  public gender : 'male' | 'female' = 'male'
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }


  changeClient():void {
    this.name =  this.name === 'David' ? 'Ana' : 'David'
    this.gender =   this.gender === 'male' ? 'female' : 'male'
  }

  // i18 plural

  public clients : string[] = ['David', 'Ana', 'Laura', 'Carlos', 'Maria']
  public clientsMap = {
    '=0' : 'No tenemos ningún cliente esperando',
    '=1' : 'Tenemos un cliente esperando',
    'other' : 'Tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.pop()
  }


  //Key Value Pipe

  public person = {
    name : 'David',
    age : 25,
    address : 'Calle 123'
  }


  // Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('Timer', value))
  )
}
