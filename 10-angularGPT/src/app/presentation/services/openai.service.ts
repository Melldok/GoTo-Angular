import { Injectable } from '@angular/core';

import { from } from 'rxjs';
import { orthographyUseCase } from '../../core/use-cases';



@Injectable({providedIn: 'root'})
export class OpenAiService {


  checkOrthography( prompt: string ) {
    return from( orthographyUseCase(prompt) ) ;
  }


}
