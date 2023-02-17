import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Aqui definimos qué contiene este módulo. Pipes, componentes, etc.
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    // Aquí definimos qué cosas quiero hacer visibles o públicas fuera de este módulo
    exports: [
        ListadoComponent,
    ],
    // Aquí dentro van módulos 
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}