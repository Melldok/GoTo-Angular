import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;


  public orderBy : keyof Hero | '' | null = null;

  public heroes : Hero[] = [
    {
      name: 'Superman',
      color: Color.blue,
      canFly: true
    },
    {
      name: 'Batman',
      color: Color.black,
      canFly: false
    },
    {
      name: 'Robin',
      color: Color.green,
      canFly: false
    },
    {
      name: 'Flash',
      color: Color.red,
      canFly: false
    },
    {
      name : 'Daredevil',
      color : Color.red,
      canFly : false
    },
    {
      name : 'Ironman',
      color : Color.red,
      canFly : true
    },
    {
      name : 'Hulk',
      color : Color.green,
      canFly : false
    },
    {
      name : 'Thor',
      color : Color.blue,
      canFly : true
    },
    {
      name : 'Captain America',
      color : Color.blue,
      canFly : false
    },

  ];



  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: string): void {
    this.orderBy = value as keyof Hero;
  }

}
