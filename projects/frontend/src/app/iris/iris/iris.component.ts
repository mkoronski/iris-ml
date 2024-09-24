import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Iris, ProbabilityPrediction, SVCParameters, SVCResult} from "./constants";
import {IrisService} from "./iris.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Color, NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-iris',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxChartsModule
  ],
  templateUrl: './iris.component.html',
  styleUrl: './iris.component.css'
})
export class IrisComponent {
  public svcParameters: SVCParameters = new SVCParameters();
  public svcResult: SVCResult | undefined;
  public iris: Iris = new Iris();
  public probabilityPredictions: ProbabilityPrediction[] | undefined;

  // graph styling
  public colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
  };

  constructor(private irisService: IrisService) {
  }

  public trainModel() {
    this.irisService.trainModel(this.svcParameters).subscribe((svcResult) => {
      this.svcResult = svcResult;
    });
  }

  public predictIris() {
    this.irisService.predictIris(this.iris).subscribe((probabilityPredictions) => {
      this.probabilityPredictions = probabilityPredictions;
    });
  }
}
