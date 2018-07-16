import { FmtBtcPipe } from '../pipes/fmt-btc.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { AppAsideMenuComponent } from './app-aside-menu/app-aside-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppAtlasComponent } from './app-atlas/app-atlas.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FmtPercentagePipe } from '../pipes/percentage.pipe';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
      AppAtlasComponent,
      AppAsideMenuComponent,
      AppContentComponent,

      FmtPercentagePipe,
      FilterPipe,
      FmtBtcPipe
    ],
    declarations: [
      AppAtlasComponent,
      AppAsideMenuComponent,
      AppContentComponent,
      AppFooterComponent,

      FmtPercentagePipe,
      FilterPipe,
      FmtBtcPipe
    ],
    providers: [ ],
})
export class SharedModule { }
