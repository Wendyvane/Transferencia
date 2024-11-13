import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import movies from 'src/assets/json/movieData.json';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  slug: string = '';
  moviesJson: any = movies;
  movieGet: any;
  movieInfo: any;

  constructor(
    private aroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

      this.aroute.params.subscribe(params => {

        this.slug = params['slug'];
  
        this.movieGet = JSON.stringify(this.moviesJson[0]['peliculas'][ this.slug ]);

        try {

          this.movieInfo = JSON.parse(this.movieGet);

        } catch (error) {

          console.log('No se encuentra la película indicada');

          this.router.navigate(['/inicio'])

        }
   
  
      });

  }

}
