import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/movie.model';
import { showSidenav, hideSidenav } from './actions';
import { Action } from '@ngrx/store';
import { SidenavActionTypes } from './actions';

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

export function sidenavReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SidenavActionTypes.HideSidenav:
      return false;
    case SidenavActionTypes.ShowSidenav:
      return true;
    case SidenavActionTypes.ToggleSidenav:
      return !state;
  }
}

// export function movieReducer(state, action) {
//   return _movieReducer(state, action);
// }
