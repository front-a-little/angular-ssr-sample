import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserComponent } from "./teaser.component";
import { ButtonComponent } from "../button/button.component";


@NgModule({
  declarations: [TeaserComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TeaserComponent
  ]
})
export class TeaserModule { }
