import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'techverx-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input('loadingText') showLoadingText = true;

  constructor() { }

  ngOnInit() {
  }

}
