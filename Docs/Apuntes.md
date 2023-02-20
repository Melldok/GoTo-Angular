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



## Formularios

Con el módulo FormsModule podemos usar directamente funciones como preventDefault de manera automatizada

```html
<form (ngSubmit)="agregar()">
    
    <input type="text" placeholder="Nombre">

    <input type="number" placeholder="Poder"> 

    <button type="submit">
        Agregar
    </button>

</form>

```

Two way data binding. El input recibe y envia el valor 

```html

    <input 
        type="text" 
        placeholder="Nombre"
        name="nombre"
        [(ngModel)]="nuevo.nombre"
    >

```

## Envio de data entre componentes :

### De padre a hijo :

Se utiliza el input.  Se envia mediante corchetes. Se puede utilizar con un alias.

```ts

    <app-agregar [nuevo]="nuevo"></app-agregar>

        @Input() nuevo: Personaje = {
        nombre: '',
        poder: 0    
  }

```

### De hijo a padre:

Se utiliza el output. 

```ts

    // En el componente

    @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    agregar(){

    if(this.nuevo.nombre.trim().length === 0){return}

    console.log(this.nuevo)

    //Emite un nuevo item de tipo personaje (Definido en el Emitter)
    this.onNuevoPersonaje.emit(this.nuevo)
    this.nuevo = {nombre: '', poder: 0}

    // Recibiendo en el template ()

        <app-agregar 
        [nuevo]="nuevo"
        (onNuevoPersonaje)="agregarNuevoPersonaje($event)"
        ></app-agregar>

    // Consumiendo en componente padre

        nuevo: Personaje = {
        nombre: '',
        poder: 0   
    }

        agregarNuevoPersonaje(argumento:Personaje){
            this.personajes.push(argumento)
        }
    
    }
```


## Servicios

Los servicios permiten a Angular trabajar de forma muy completa sin tener que recurrir a librerias de terceros para todo. Basicamente permiten trabajar con patron Redux sin Redux.


Se declaran dentro de providers

```ts


    @NgModule({
    declarations: [
        
    
        MainPageComponent,
                PersonajesComponent,
                AgregarComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        DbzService
    ]
    })
    export class DbzModule { }

```

Se crean como injectables : 

```ts

    @Injectable()
    export class DbzService{
        constructor(){
            console.log('Servicio iniciado')
        }
    }
    

    // Inyectar 


    constructor(
        private dbzService: DbzService
    ){}

```