import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibTechverxlibComponent } from './lib-techverxlib.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [LibTechverxlibComponent, LoaderComponent],
  imports: [ CommonModule ],
  exports: [LibTechverxlibComponent, LoaderComponent]
})
export class LibTechverxlibModule { }
