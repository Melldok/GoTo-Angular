import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Tansition 2"></app-title>

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />


      <div class="bg-blue-500 h-56 w-56" style="view-transition-name: hero2">

      </div>

    </section>
  `,
  styles: ``,
})
export default class ViewTransitionComponent {}
