import {Component, Input} from '@angular/core';
import {NavigationItem} from "../main-layout.types";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {
    @Input()
    public menuItems: NavigationItem[] | undefined;

}
