import {NgModule} from '@angular/core';

import {MainLayoutComponent} from './main-layout.component';
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        FlexLayoutModule,
        MatButtonModule,
        MatListModule,
        MatLineModule,
        FlexLayoutModule
    ],
    exports: [
        MainLayoutComponent,
        NavBarComponent,
        SideNavComponent],
    declarations: [
        MainLayoutComponent,
        NavBarComponent,
        SideNavComponent
    ],
    providers: [],
})
export class MainLayoutModule {
}
