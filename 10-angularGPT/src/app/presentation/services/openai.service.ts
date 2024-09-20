import { Injectable } from '@angular/core';

import { from, Observable, of, tap } from 'rxjs';
import { orthographyUseCase, prosConsStreamUseCase, prosConsUseCase  } from '../../core/use-cases';
import { translateUseCase } from '../../core/use-cases/translate/translate.use-case';
import { textToAudioUseCase } from '../../core/use-cases/audios/text-to-audio.use-case';
import { audioToTextUseCase } from '../../core/use-cases/audios/audio-to-text.use-case';
import { createThreadUseCase } from '../../core/use-cases/assistant/create-thread.use-case';
import { postQuestionUseCase } from '../../core/use-cases/assistant/post-question.use-case';




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


  textToAudio( prompt: string, voice: string ) {
    return from( textToAudioUseCase(prompt, voice) );
  }
  audioToText( file: File, prompt?: string) {
    return from(audioToTextUseCase(file, prompt));
  }

  createThread(): Observable<string> {
    if (localStorage.getItem('thread')) {
      return of(localStorage.getItem('thread')!);
    }

    return from(createThreadUseCase()).pipe(
      tap((thread) => {
        localStorage.setItem('thread', thread);
      })
    );
  }

  postQuestion(threadId: string, question: string) {
    return from(postQuestionUseCase(threadId, question));
  }

}
