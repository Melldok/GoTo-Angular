import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-output-ui',
  templateUrl: 'input-output.component.html',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NameComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
