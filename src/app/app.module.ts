import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DancesModule } from './modules/dances.module';
import { DanceBasicComponent } from './danceBasic/danceBasic.component';

@NgModule({
  declarations: [
    AppComponent,
    DanceBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DancesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
