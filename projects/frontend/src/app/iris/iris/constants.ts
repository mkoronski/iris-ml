export interface Iris {
    sepalLength: number,
    sepalWidth: number,
    petalLength: number,
    petalWidth: number
}

export class ProbabilityPrediction {
    name: string | undefined;
    value: number | undefined;
}

export interface SVCParameters {
    C: number;
}

export interface SVCResult {
    accuracy: number | undefined;
}
