import { Injectable } from '@angular/core';

import { from } from 'rxjs';
import { orthographyUseCase, prosConsStreamUseCase, prosConsUseCase  } from '../../core/use-cases';
import { translateUseCase } from '../../core/use-cases/translate/translate.use-case';




@Injectable({providedIn: 'root'})
export class OpenAiService {


  checkOrthography( prompt: string ) {
    return from( orthographyUseCase(prompt) ) ;
  }

  prosConsDiscusser( prompt: string ) {
    return from( prosConsUseCase(prompt) ) ;
  }
  prosConsStreamDiscusser( prompt: string, abortSignal : AbortSignal ) {
    return prosConsStreamUseCase(prompt, abortSignal)
  }

  translate( prompt: string, lang: string ) {
    return from( translateUseCase(prompt, lang) );
  }


}
