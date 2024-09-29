import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Iris, ProbabilityPrediction, SVCResult} from "./constants";
import {IrisService} from "./iris.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Color, NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";
import {MatStepperModule} from "@angular/material/stepper";

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
    MatStepperModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  templateUrl: './iris.component.html',
  styleUrl: './iris.component.css'
})
export class IrisComponent {
  private _formBuilder = inject(FormBuilder);

  model = this._formBuilder.group({
    cparam: ['2', Validators.required],
  });
  iris = this._formBuilder.group({
    sepalLength: ['5.0', Validators.required],
    sepalWidth: ['3.5', Validators.required],
    petalLength: ['2.5', Validators.required],
    petalWidth: ['1.2', Validators.required],
  });
  isLinear = false;



  public svcResult: SVCResult | undefined;
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

  public reset() {
    this.svcResult = undefined;
  }

  public trainModel() {
    const value = this.model.value;


    this.irisService.trainModel({
      C: Number(value.cparam)
    }).subscribe((svcResult) => {
      this.svcResult = svcResult;
    });
  }

  public predictIris() {
    const iris: Iris = {
      sepalLength: Number(this.iris.value.sepalLength),
      petalWidth: Number(this.iris.value.petalWidth),
      petalLength: Number(this.iris.value.petalLength),
      sepalWidth: Number(this.iris.value.sepalWidth),
    }

    this.irisService.predictIris(iris).subscribe((probabilityPredictions) => {
      this.probabilityPredictions = probabilityPredictions;
    });
  }
}
