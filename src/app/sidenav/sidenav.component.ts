import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { hideSidenav, showSidenav } from 'src/store/actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
})
export class SidenavComponent {
  sidenavState$: Observable<boolean>;

  constructor(private store: Store<{ sidenav: boolean }>) {
    this.sidenavState$ = store.select('sidenav');
    console.log(store.select('sidenav'));
  }

  handleOpenSidenav() {
    this.store.dispatch(showSidenav());
  }

  handleCloseSidenav() {
    this.store.dispatch(hideSidenav());
  }
}
