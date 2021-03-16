import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { sidenavReducer } from '../store/reducers';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ sidenav: sidenavReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
