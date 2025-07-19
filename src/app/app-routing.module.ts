import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RaccNecklacesComponent} from './racc-necklaces/racc-necklaces.component';
import {RaccAboutComponent} from './racc-about/racc-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'necklaces',
    pathMatch: 'full',
  },
  {
    path: 'necklaces',
    component: RaccNecklacesComponent
  },
  {
    path: 'about',
    component: RaccAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
