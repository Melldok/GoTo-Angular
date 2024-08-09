import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public MenuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.MenuItems = [
      {
        label: 'Pipes De Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/basics',

          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',

          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon',

          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items : [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: '/custom',

          }
        ]
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
      },
    ];
  }
}
