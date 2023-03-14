import { NgModule, Inject } from '@angular/core';
import { ServerModule, INITIAL_CONFIG, PlatformConfig } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  // https://github.com/angular/universal/issues/1826
  /*
  constructor(@Inject(INITIAL_CONFIG) private config: PlatformConfig) {
    this.config.baseUrl = "http://localhost:4200";
    this.config.useAbsoluteUrl = true;
  }
   */
}
