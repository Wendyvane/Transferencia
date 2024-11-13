import { Component } from '@angular/core';

import movies from 'src/assets/json/movies.json';
import premieres from 'src/assets/json/premieres.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: any = movies;
  premieres: any = premieres;
  
}
