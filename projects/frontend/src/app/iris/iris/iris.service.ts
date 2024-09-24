import {Injectable} from '@angular/core';
import {
    Iris,
    ProbabilityPrediction,
    SVCParameters,
    SVCResult
} from "./constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const SERVER_URL = 'api/';

@Injectable({
  providedIn: 'root',
})
export class IrisService {

  private serverUrl = `${SERVER_URL}`;

  constructor(private http: HttpClient) {}

  public trainModel(svcParameters: SVCParameters): Observable<SVCResult> {
    return this.http.post<SVCResult>(`${this.serverUrl}train`, svcParameters);
  }

  public predictIris(iris: Iris): Observable<ProbabilityPrediction[]> {
    return this.http.post<ProbabilityPrediction[]>(`${this.serverUrl}predict`, iris);
  }
}
