import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleNg6LibModule} from 'example-ng6-lib';
import { TechverxLib7479Module} from 'techverx-lib7479';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleNg6LibModule,
    TechverxLib7479Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
