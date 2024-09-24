import { Component } from '@angular/core';
import {IrisComponent} from "./iris/iris/iris.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IrisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
