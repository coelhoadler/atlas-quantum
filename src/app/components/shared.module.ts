import { AppAsideMenuComponent } from './app-aside-menu/app-aside-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppAtlasComponent } from './app-atlas/app-atlas.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
      AppAtlasComponent,
      AppAsideMenuComponent,
      AppContentComponent
    ],
    declarations: [
      AppAtlasComponent,
      AppAsideMenuComponent,
      AppContentComponent,
      AppFooterComponent
    ],
    providers: [ ],
})
export class SharedModule { }
