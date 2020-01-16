import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTechverxlibComponent } from './lib-techverxlib.component';

describe('LibTechverxlibComponent', () => {
  let component: LibTechverxlibComponent;
  let fixture: ComponentFixture<LibTechverxlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTechverxlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTechverxlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
