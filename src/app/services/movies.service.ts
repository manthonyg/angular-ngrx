import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private _http: HttpClient) {}

  readonly API_SEARCH_BASE = 'http://api.tvmaze.com/search/shows?q=';

  getMovies(query: string) {
    return this._http.get<any[]>(this.API_SEARCH_BASE + query).pipe(
      map((movies) => {
        const cleanedMovies = movies.map((movie) => ({
          name: movie.show?.name,
          premieredOn: movie?.show?.premiered,
          imageURL: movie?.show?.image?.medium,
        }));
        console.log(cleanedMovies);
        return cleanedMovies;
      })
    );
  }
}
//     .pipe(
//       map((movies) => {
//         return {
//           name: movies[0].show.name,
//           imageURL: movies[0].image.medium,
//           premieredOn: new Date(movies[0].premiered),
//         };
//       })
//     )
//     .subscribe((movie) => {
//       return movie;
//     });
// }
