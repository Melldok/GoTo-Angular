import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersSlowComponent, CommonModule, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
