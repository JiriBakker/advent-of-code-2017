import { Challenge } from '../util/challenge'

export class Day17 implements Challenge {

    private static spinLock(stepSize: number, nrOfSteps: number, afterValueToFind: number): number {
        const buffer = [];
        let pos = 0;
        let valuePos = -1;
        let valueAfter = -1;
        for (let step = 0; step <= nrOfSteps; step++) {
            pos = step === 0 ? 0 : ((pos + stepSize) % step) + 1;
            if (valuePos == -1) {
                buffer.splice(pos, 0, step);
            }

            if (step == afterValueToFind) {
                valuePos = pos;
                valueAfter = buffer[(pos + 1) % buffer.length];
            }
            else if (pos <= valuePos) {
                valuePos++;
            }
            else if (pos == valuePos + 1) {
                valueAfter = step;
            }
        }
        return valueAfter;
    }

    public a(input: string[], nrOfSteps: number = 2017): number {
        const stepSize = parseInt(input[0]);
        return Day17.spinLock(stepSize, nrOfSteps, nrOfSteps);
    }

    public b(input: string[], nrOfSteps: number = 50000000): number {
        const stepSize = parseInt(input[0]);
        return Day17.spinLock(stepSize, nrOfSteps, 0);
    }

}