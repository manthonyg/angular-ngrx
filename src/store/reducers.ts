import { createReducer, on } from '@ngrx/store';
import { showSidenav, hideSidenav } from './actions';

export const initialState: boolean = false;

const _sidenavReducer = createReducer(
  initialState,
  on(showSidenav, () => false),
  on(hideSidenav, () => true)
);

export function sidenavReducer(state, action) {
  return _sidenavReducer(state, action);
}
