import { Component, ViewChild, ElementRef } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  // Aqui manejamos el input de manera individual sin el modulo de forms

  //  Buscar el input con la referencia local que hemos definido. 
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService){}

  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return
    }else if{
      valor.trim()
    }
    
    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value = ''



  }

}
