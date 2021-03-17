import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/movie.model';
import { showSidenav, hideSidenav } from './actions';

export const initialState: boolean = false;
// export const movieState: Movie;

const _sidenavReducer = createReducer(
  initialState,
  on(showSidenav, () => false),
  on(hideSidenav, () => true)
);

// const _movieReducer = createReducer(
//   movieState,
//   on(getMovie, (movie) => movie)
// )

export function sidenavReducer(state, action) {
  return _sidenavReducer(state, action);
}

// export function movieReducer(state, action) {
//   return _movieReducer(state, action);
// }
