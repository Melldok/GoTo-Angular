import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Krillin',
          poder: 6000
        },
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 10000
        }
      ]

    get personajes(): Personaje[]{
        // Rompe la referencia y crea un nuevo array 
        return [...this._personajes];
    }

    agregarPersonaje(data: Personaje){
        this._personajes.push(data)
    }
}