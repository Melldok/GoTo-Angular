import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-translate-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './translatePage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default  class TranslatePageComponent { }
