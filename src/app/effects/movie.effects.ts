import { MovieService } from '../services/movies.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private moviesService: MovieService) {}

  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies Page] Get Movie'),
      mergeMap(() =>
        this.moviesService.getMovies('girls').pipe(
          map((movies) => {
            console.log(movies);
            return {
              type: '[Movies API] Movie Loaded Success',
              payload: movies,
            };
          }),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );
}
