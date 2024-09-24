import {Component, Input} from '@angular/core';
import {NavigationItem} from "../main-layout.types";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    @Input()
    public menuItems: NavigationItem[] = [];

    @Input()
    public hasSideNav: boolean = false;

    @Input()
    public title: string = '';

    @Input()
    public logoUrl: string = '';

    constructor() {
    }

}
