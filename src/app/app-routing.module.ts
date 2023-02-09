import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeaserListComponent} from "./teaserlist/teaser-list/teaser-list.component";

const routes: Routes = [
  { path: '', component: TeaserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
