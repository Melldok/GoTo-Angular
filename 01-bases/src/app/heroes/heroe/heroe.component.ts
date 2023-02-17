import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
    name: string = 'Ironman';
    age : number = 45

    get capitalizedName(){
        return this.name.toUpperCase()
    }

    getName(): string{
        return `${this.name} - ${this.age}`
    }

    changeName(): void{

        //const heroes: string[] = ['Spiderman', 'Capitán América', 'Falcon']

        //this.name = heroes[Math.floor(Math.random() * heroes.length)]

        this.name = 'Spiderman'
    }

    changeAge(): void{
        this.age = 30
    }
}