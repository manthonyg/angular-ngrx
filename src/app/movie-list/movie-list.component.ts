import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
})
export class MovieListComponent implements OnInit {
  readonly movies$: Observable<Movie[]> = this._store.select(
    (state) => state.movies
  );

  constructor(private _store: Store<{ movies: Movie[] }>) {
    console.log(this._store.select((state) => state.movies));
  }

  ngOnInit(): void {
    this._store.dispatch({ type: '[Movies Page] Get Movie' });
    console.log(this.movies$);
  }
}
