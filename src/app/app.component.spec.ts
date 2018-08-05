import { HttpClientModule } from '@angular/common/http';
import { FmtPercentagePipe } from './pipes/percentage.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { AppContentComponent } from './components/app-content/app-content.component';
import { FormsModule } from '@angular/forms';
import { AppAsideMenuComponent } from './components/app-aside-menu/app-aside-menu.component';
import { AppAtlasComponent } from './components/app-atlas/app-atlas.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FmtBtcPipe } from './pipes/fmt-btc.pipe';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppAtlasComponent,
        AppAsideMenuComponent,
        AppContentComponent,

        FilterPipe,
        FmtPercentagePipe,
        FmtBtcPipe
      ],
      imports: [
        FormsModule,
        RouterModule,
        HttpClientModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'atlas project'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const appTitle = app.title;

    expect(appTitle).toEqual('atlas project');
    expect(appTitle).toEqual(jasmine.any(String));
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Lucros');
  }));
});
