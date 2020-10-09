import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/Search/search.component';
import { AboutComponent } from './components/About/about.component';
import { ArtistComponent } from './components/Artist/artist.component';
import { AlbumComponent } from './components/Album/album.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/HOME',
        pathMatch: 'full'
    },
    {
      path:
      'HOME',
      component: SearchComponent
    },
    {
      path: 'ABOUT',
      component: AboutComponent
    },
    {
      path: 'artist/:id',
      component: ArtistComponent
    },
    {
      path: 'album/:id',
      component: AlbumComponent
    }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
