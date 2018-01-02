import { Challenge } from '../util/challenge'
import { ArrayUtils } from '../util/arrayUtils'
import { HashingUtils } from '../util/hashingUtils'

export class Day10 implements Challenge {

    public a(input: string[], circleLength: number = 256): number {
        const lengths = input[0].split(',').map(nr => parseInt(nr));
        let circle = Array.apply(null, { length: circleLength }).map(Number.call, Number)
        let currentIndex = 0;
        let skipSize = 0;

        lengths.forEach(length => {
            if (length > 1) {
                circle = ArrayUtils.reverseRange(circle, currentIndex, currentIndex + length - 1);
            }
            currentIndex = (currentIndex + length + skipSize) % circle.length;
            skipSize++;
        });
        
        return circle[0] * circle[1];
    }

    public b(input: string[], circleLength: number = 256): string {
        return HashingUtils.computeKnotHash(input[0], circleLength);
    }

}