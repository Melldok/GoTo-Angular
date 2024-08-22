import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '../../components/chat-bubbles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';
import { TypingLoaderComponent } from '../../components/typingLoader/typingLoader.component';
import { TextMessageBoxComponent } from '../../components/text-boxes/textMessageBox/textMessageBox.component';
import { TextMessageBoxFileComponent, TextMessageEvent } from '../../components/text-boxes/textMessageBoxFile/textMessageBoxFile.component';
import { TextMessageBoxEvent, TextMessageBoxSelectComponent } from '../../components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { Message } from '../../../interfaces/message.interface';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-ortrography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,

    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './ortographyPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtrographyPageComponent {

  public messages = signal<Message[]>([ { text: 'Hola Mundo', isGpt: false } ]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );


  handleMessage( prompt: string ) {

    console.log({ prompt });

  }

  handleMessageWithFile( { prompt, file }: TextMessageEvent ) {

    console.log({ prompt, file });

  }

  handleMessageWithSelect( event: TextMessageBoxEvent ) {
    console.log(event);
  }


}
