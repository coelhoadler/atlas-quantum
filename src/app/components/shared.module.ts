import { AppAsideMenuComponent } from './app-aside-menu/app-aside-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppAtlasComponent } from './app-atlas/app-atlas.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
      AppAtlasComponent,
      AppAsideMenuComponent
    ],
    declarations: [
      AppAtlasComponent,
      AppAsideMenuComponent
    ],
    providers: [ ],
})
export class SharedModule { }
