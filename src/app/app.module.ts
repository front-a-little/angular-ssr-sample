import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";

import { TeaserListModule} from "./teaserlist/teaserList.module";
import { ThemeSwitchComponent } from './core/theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TeaserListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
