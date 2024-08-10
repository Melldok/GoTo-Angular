import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors? : ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(
    // El elemento se refiere al elemento del DOM al que se le aplica la directiva, de este modo se puede manipular el elemento
    private element: ElementRef<HTMLElement>
  ) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if(!this.htmlElement) return
    if(!this._errors){
      this.htmlElement.nativeElement.innerText = 'No Hay Errores';
      return
    }

    const errors = Object.keys(this._errors);
    switch (errors[0]) {
      case 'required':
        this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
        break;
      case 'minlength':
        this.htmlElement.nativeElement.innerText = `Minimo ${this._errors[errors[0]].requiredLength} caracteres`;
        break;
      case 'email':
        this.htmlElement.nativeElement.innerText = 'Este campo debe ser un correo';
        break;
      default:
        this.htmlElement.nativeElement.innerText = 'Error desconocido';
        break;
    }
    return


  }

}
