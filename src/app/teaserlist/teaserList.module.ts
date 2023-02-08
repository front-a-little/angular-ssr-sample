import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserComponent } from "./teaser/teaser.component";
import { ButtonComponent } from "../core/button/button.component";
import { TeaserListComponent } from './teaser-list/teaser-list.component';


@NgModule({
  declarations: [TeaserComponent, ButtonComponent, TeaserListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TeaserListComponent
  ]
})
export class TeaserListModule { }
