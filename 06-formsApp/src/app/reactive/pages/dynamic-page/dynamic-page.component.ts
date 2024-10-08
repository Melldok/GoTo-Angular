import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required ],
      ['Death Stranding', Validators.required ],
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  constructor(
    private fb : FormBuilder
  ) { }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }


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


  isValidFieldInArray( formArray : FormArray, index : number) {

    return formArray.controls[index].errors
      && formArray.controls[index].touched;

  }

  onDeleteFavorite = (index: number): void => {
    this.favoriteGames.removeAt(index);
  }


  onAddFavorite = (): void => {
    if(this.newFavorite.invalid){
      this.newFavorite.markAsTouched();
      return;
    }
    const newGame = this.newFavorite.value;

    // this.favoriteGames.push(new FormControl(newGame, Validators.required));

    this.favoriteGames.push(this.fb.control(newGame, Validators.required));

    this.newFavorite.reset();
  }

  onSubmit():void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray )= this.fb.array([]);
    this.myForm.reset();

  }

}
