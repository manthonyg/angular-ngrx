import { createAction } from '@ngrx/store';

export enum SidenavActionTypes {
  HideSidenav = '[Sidenav] Hide Sidenav',
  ShowSidenav = '[Sidenav] Show Sidenav',
}

export const hideSidenav = createAction(SidenavActionTypes.HideSidenav);
export const showSidenav = createAction(SidenavActionTypes.ShowSidenav);
