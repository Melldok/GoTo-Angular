import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public counter = signal(10);

  // El effect en las señales funciona como useEffect en Rect, con la diferencia de que se limpia "solo"  y no necesita array de dependencias

  public userChangeEffect = effect(() => {
    console.log(`${this.user().first_name} ${this.counter()}`);
  })

  increaseBy(value : number ){
    this.counter.update( current => current + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update( current => {
      switch(field){
        case 'email':
          current.email = value;
          break
        case 'first_name':
          current.first_name = value;
          break
        case 'last_name':
          current.last_name = value;
          break
        case 'avatar':
          current.avatar = value;
          break
        case 'id':
          current.id = Number(value);
          break
      }
      return current;
    })
  }
}
