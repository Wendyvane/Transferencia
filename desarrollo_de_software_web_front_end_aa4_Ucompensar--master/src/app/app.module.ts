import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PremierComponent } from './premier/premier.component';
import { SafePipe } from './safe.pipe';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'pelicula/:slug',
    component: MovieComponent
  },
  {
    path: 'estreno/:slug',
    component: PremierComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent,
    HeaderComponent,
    PremierComponent,
    SafePipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
