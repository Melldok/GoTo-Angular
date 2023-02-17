# Apuntes generales Angular.


## Directivas: 

### Directiva ngFor* :

```html

    <p>Listado de Héroes</p>
    <ul>
    
        <li *ngFor="let heroe of heroes">{{heroe}}</li>

    </ul>

```


### Directiva ngif y else:


```html

    <div *ngIf="heroeBorrado" >
        <h3>Héroe Borrado : <span>{{heroeBorrado}}</span></h3> 
    </div>



    <div *ngIf="heroeBorrado; else noBorrado" >
    <h3>Héroe Borrado : <span>{{heroeBorrado}}</span></h3> 
    </div>

    <ng-template #noBorrado>
        <h3>No ha borrado nada</h3> 
    </ng-template>

```


## Módulos: 

Nos ayudan a agrupar componentes y piezas de la aplicación que tienen sentido entre sí. Cumplen varios objetivos. Como encapsular las cosas y ayudar con el lazyload. Cada persona puede encargarse de elementos diferentes de la aplicación, que se construirá de manera empaquetada y cómoda. 


```ts

    // Este modulo lo importaremos en su totalidad en un nivel mas alto de la aplicación, como app.module.

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

```
