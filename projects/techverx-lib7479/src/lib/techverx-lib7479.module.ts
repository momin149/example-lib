import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechverxLib7479Component } from './techverx-lib7479.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [TechverxLib7479Component, LoaderComponent],
  imports: [CommonModule],
  exports: [TechverxLib7479Component, LoaderComponent]
})
export class TechverxLib7479Module { }
