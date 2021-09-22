import { NgModule } from '@angular/core';
import { ArtistsComponent } from '../artists/artists.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
