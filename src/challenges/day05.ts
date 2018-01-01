import { Challenge } from '../util/challenge'

export class Day05 implements Challenge {

    private static countSteps(input: string[], incrementFunc: (curVal: number) => number) : number {
        const steps = input.map(line => parseInt(line));
        let pos = 0;
        let stepCounter = 0;
        while (pos >= 0 && pos < steps.length) {
            const oldPos = pos;
            pos += steps[pos];
            steps[oldPos] += incrementFunc(steps[oldPos]);
            stepCounter++;
        }
        return stepCounter;
    }

    public a(input: string[]): number {
        return Day05.countSteps(input, _ => 1);
    }

    public b(input: string[]): number {
        return Day05.countSteps(input, val => val >= 3 ? -1 : 1);
    }
}