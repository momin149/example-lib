import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechverxLib7479Component } from './techverx-lib7479.component';

describe('TechverxLib7479Component', () => {
  let component: TechverxLib7479Component;
  let fixture: ComponentFixture<TechverxLib7479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechverxLib7479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechverxLib7479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
