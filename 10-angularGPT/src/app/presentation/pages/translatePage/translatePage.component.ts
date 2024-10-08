import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Message } from '../../../interfaces/message.interface';
import { ChatMessageComponent } from '../../components/chat-bubbles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';
import { TextMessageBoxComponent } from '../../components/text-boxes/textMessageBox/textMessageBox.component';
import { TypingLoaderComponent } from '../../components/typingLoader/typingLoader.component';
import { OpenAiService } from '../../services/openai.service';
import { TextMessageBoxEvent, TextMessageBoxSelectComponent } from '../../components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';

@Component({
  selector: 'app-translate-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    TypingLoaderComponent,
    MyMessageComponent,
    TextMessageBoxComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './translatePage.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default  class TranslatePageComponent {

  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );

  public languages = signal([
    { id: 'alemán', text: 'Alemán' },
    { id: 'árabe', text: 'Árabe' },
    { id: 'bengalí', text: 'Bengalí' },
    { id: 'francés', text: 'Francés' },
    { id: 'hindi', text: 'Hindi' },
    { id: 'inglés', text: 'Inglés' },
    { id: 'japonés', text: 'Japonés' },
    { id: 'mandarín', text: 'Mandarín' },
    { id: 'portugués', text: 'Portugués' },
    { id: 'ruso', text: 'Ruso' },
  ]);


  handleMessageWithSelect( { prompt, selectedOption }: TextMessageBoxEvent ) {

    const message = `Traduce a ${ selectedOption }: ${ prompt }`;

    this.isLoading.set(true);
    this.messages.update( prev => [ ...prev, { text: message, isGpt: false }]);

    this.openAiService.translate( prompt, selectedOption )
      .subscribe( ({ message }) => {

        this.isLoading.set(false);
        this.messages.update( prev => [...prev, { text: message, isGpt: true }] );

      })


  }



}
