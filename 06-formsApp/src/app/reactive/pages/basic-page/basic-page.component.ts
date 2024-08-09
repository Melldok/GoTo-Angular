import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 1500,
  inStorage: 5,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   Validaciones sincronas seguidas de validaciones asincronas FormControl('', [], [])
  //   name : new FormControl(''),
  //   price : new FormControl(0),
  //   inStorage : new FormControl(0),
  // });

  // FormBuilder mejora la sintaxis, evita repetir el new FormControl

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [null, [Validators.required, Validators.min(0)], []],
    inStorage: [null, [Validators.required, Validators.min(0)], []],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm
      .reset
      // rtx5090
      ();
  }

  // Getter errores

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must have at least ${errors['minlength'].requiredLength} characters`;
        case 'min':
          return 'The minimum value is 0';
        default:
          return null;
      }
    }

    return null
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    // Reset form
    this.myForm.reset();
  }
}
