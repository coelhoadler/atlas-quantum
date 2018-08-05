import { HttpClientModule } from '@angular/common/http';
import { FmtPercentagePipe } from './../../pipes/percentage.pipe';
import { FilterPipe } from './../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

import { AppContentComponent } from './../app-content/app-content.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppAtlasComponent } from './app-atlas.component';
import { AppAsideMenuComponent } from '../app-aside-menu/app-aside-menu.component';
import { FmtBtcPipe } from '../../pipes/fmt-btc.pipe';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppAtlasComponent', () => {
  let component: AppAtlasComponent;
  let fixture: ComponentFixture<AppAtlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppAtlasComponent,
        AppAsideMenuComponent,
        AppContentComponent,
        FilterPipe,
        FmtBtcPipe,
        FmtPercentagePipe
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAtlasComponent);
    component = fixture.componentInstance;
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
