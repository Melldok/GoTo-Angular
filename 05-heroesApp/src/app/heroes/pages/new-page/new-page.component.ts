import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  public heroForm =   new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', { nonNullable: true }),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters:       new FormControl<string>(''),
    alt_img:          new FormControl<string>(''),
  });

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    },
  ];

  constructor(
    private HeroesService: HeroesService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
  ){}


  get currentHero(): Hero {
     const hero = this.heroForm.value as Hero;
     return hero;
  }


  ngOnInit(): void {
   if (!this.router.url.includes('edit')) return

   this.activatedRoute.params
   .pipe(
    switchMap( ({ id }) => this.HeroesService.getHeroById( id )),
   ).subscribe( hero => {
      if (!hero) return this.router.navigate(['/heroes/list']);

      this.heroForm.reset(hero);

      return
   })

  }

  onSubmit():void  {
    if (this.heroForm.invalid) {
      return;
    }

    if(this.currentHero.id){
      this.HeroesService.updateHero(this.currentHero)
      .subscribe((hero) => {
        this.showSnackBar('Registro actualizado');
      });

      return
    }

    this.HeroesService.addHero(this.currentHero)
    .subscribe( hero => {
      this.showSnackBar('Registro creado');
      this.router.navigate(['/heroes/edit', hero.id]);
    })

  }

  onDeleteHero = () => {
    if(!this.currentHero.id) return;

    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: this.currentHero.superhero
    });

    dialog.afterClosed().subscribe( result => {
      if (result) {
        this.HeroesService.deleteHero(this.currentHero.id)
        .subscribe( wasDeleted => {
            if(wasDeleted){
              this.router.navigate(['/heroes/list']);
            }
        })
        this.showSnackBar('Registro eliminado');

      }
    })

  }


  showSnackBar(message: string): void {
    this.snackbar.open(message, 'ok!', {
      duration : 2500
    });
  }


}
