import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibTechverxlibComponent } from './lib-techverxlib.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [LibTechverxlibComponent, LoaderComponent],
  imports: [ CommonModule ],
  exports: [CommonModule, LibTechverxlibComponent, LoaderComponent]
})
// export class LibTechverxlibModule { }

export class LibTechverxlibModule {
  static forRoot(): ModuleWithProviders<LibTechverxlibModule> {
    return {
      ngModule: LibTechverxlibModule
    };
  }
}
