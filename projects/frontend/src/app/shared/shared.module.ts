import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainLayoutModule} from "./layouts/main-layout/main-layout.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
    imports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,


        NgxChartsModule,
        MainLayoutModule
    ],
    exports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,


        // Chart module
        NgxChartsModule,
        MainLayoutModule
    ],
    declarations: [],
    providers: [
    ],
})
export class SharedModule {
}
