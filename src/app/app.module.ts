import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieEffects } from './effects/movie.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { sidenavReducer } from '../store/reducers';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EffectsModule } from '@ngrx/effects';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, SidenavComponent, MovieListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ sidenav: sidenavReducer }),
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
