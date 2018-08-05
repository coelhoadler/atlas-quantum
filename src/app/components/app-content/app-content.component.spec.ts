import { HttpClientModule } from '@angular/common/http';
import { FmtPercentagePipe } from './../../pipes/percentage.pipe';
import { FmtBtcPipe } from './../../pipes/fmt-btc.pipe';
import { FilterPipe } from './../../pipes/filter.pipe';
import { SharedModule } from './../shared.module';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentComponent } from './app-content.component';

describe('AppContentComponent', () => {
  let component: AppContentComponent;
  let fixture: ComponentFixture<AppContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppContentComponent,

        FilterPipe,
        FmtBtcPipe,
        FmtPercentagePipe
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
