import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = true;
  public currentPrice: number = 10;

  // Tambien es considerado parte del ciclo de vida de angular. Sirve para inyectar servicios y dependencias en el componente.
  constructor() {}

  // Este método es llamado una vez que el componente ha sido inicializado. Es el primer método que se ejecuta en el ciclo de vida de un componente. Se dispara una sola vez.
  ngOnInit() {
    console.log('ngOnInit');
  }
  // Este método es llamado cuando hay un cambio en las propiedades de entrada del componente. Se dispara antes de ngOnInit y después de ngOnChanges.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  // Este método es llamado en cada detección de cambios en el componente. Se dispara después de ngOnInit y ngOnChanges.
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  // Este método es llamado después de que el contenido del componente ha sido inicializado. Se dispara después de ngDoCheck.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  // Este método es llamado después de que el contenido del componente ha sido verificado. Se dispara después de ngAfterContentInit
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  // Este método es llamado después de que la vista del componente ha sido inicializada. Se dispara después de ngAfterContentChecked.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  // Este método es llamado después de que la vista del componente ha sido verificada. Se dispara después de ngAfterViewInit.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  // Este método es llamado justo antes de que el componente sea destruido. Se dispara cuando el componente es destruido. Lo utilizmaos para hacer limpieza de recursos.
  // Es tremendamente importante desuscribirnos de observables, cancelar peticiones http, etc. Porque si no lo hacemos, podemos tener memory leaks. Problemas de rendimiento, etc.
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // Methods

  increasePrice() {
    this.currentPrice += 10;
  }
}
