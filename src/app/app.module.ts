import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleNg6LibModule} from 'example-ng6-lib';
import { LibTechverxlibModule} from 'lib-techverxlib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleNg6LibModule,
    LibTechverxlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
