import { Challenge } from '../util/challenge'

export class Day9 implements Challenge {

    private static count(stream: string): any {
        let depth = 0;
        let groupSum = 0;
        let garbageCount = 0;
        let isInGarbage = false;
        for (let i = 0; i < stream.length; i++) {
            if (stream[i] === "!") {
                i++;
            }
            else if (!isInGarbage) {
                if (stream[i] === "{") {
                    depth++;
                    groupSum += depth;
                }
                else if (stream[i] === "}") {
                    depth--;
                }
                else if (stream[i] === "<") {
                    isInGarbage = true;
                }
            }
            else if (stream[i] === ">") {
                isInGarbage = false;
            }
            else {
                garbageCount++;
            }
        }
        return { "groupSum": groupSum, "garbageCount": garbageCount };
    }

    public a(input: string[]): number {
        return Day9.count(input[0]).groupSum;
    }

    public b(input: string[]): number {
        return Day9.count(input[0]).garbageCount;
    }

}