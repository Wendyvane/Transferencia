import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import premieres from 'src/assets/json/premierData.json';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})
export class PremierComponent {

  slug: string = '';
  premieresJson: any = premieres;
  premierGet: any;
  premierInfo: any;

  constructor(
    private aroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

      this.aroute.params.subscribe(params => {

        this.slug = params['slug'];
  
        this.premierGet = JSON.stringify(this.premieresJson[0]['peliculas'][ this.slug ]);

        try {

          this.premierInfo = JSON.parse(this.premierGet);

        } catch (error) {

          console.log('No se encuentra el estreno indicado');

          this.router.navigate(['/inicio'])

        }
   
  
      });

  }

}
