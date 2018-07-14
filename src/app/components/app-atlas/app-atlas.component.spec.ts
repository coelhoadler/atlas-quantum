import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAtlasComponent } from './app-atlas.component';

describe('AppAtlasComponent', () => {
  let component: AppAtlasComponent;
  let fixture: ComponentFixture<AppAtlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAtlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAtlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
