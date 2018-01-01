import { Challenge } from '../util/challenge'

export class Day10 implements Challenge {

    private static reverseRange(circle: number[], startIndex: number, endIndex: number): number[] {
        const reversePair = (index1, index2) => {
            const temp = circle[index1];
            circle[index1] = circle[index2];
            circle[index2] = temp;
        }

        if (endIndex < startIndex) {
            endIndex += circle.length;
        }

        while (startIndex < endIndex) {
            reversePair(startIndex % circle.length, endIndex % circle.length);
            startIndex++;
            endIndex--;
        }

        return circle;
    }

    public static computeDenseHash(circle: number[]): string {
        const denseHash = [];
        for (let i = 0; i < circle.length / 16; i++) {
            let hash = 0;
            for (let j = 0; j < 16; j++) {
                hash = hash ^ circle[i*16 + j];
            }
            denseHash.push(hash);
        }
        return Day10.toHex(denseHash);
    }

    public static toHex(denseHash: number[]): string {
        return denseHash.map(hash => {
            let hexHash = hash.toString(16);
            return hexHash.length == 2 ? hexHash : (hexHash.length == 1 ? `0${hexHash}` : "00");
        }).join('');
    }

    public a(input: string[], circleLength: number = 256): number {
        const lengths = input[0].split(',').map(nr => parseInt(nr));
        let circle = Array.apply(null, { length: circleLength }).map(Number.call, Number)
        let currentIndex = 0;
        let skipSize = 0;

        lengths.forEach(length => {
            if (length > 1) {
                circle = Day10.reverseRange(circle, currentIndex, currentIndex + length - 1);
            }
            currentIndex = (currentIndex + length + skipSize) % circle.length;
            skipSize++;
        });
        
        return circle[0] * circle[1];
    }

    public b(input: string[], circleLength: number = 256): string {
        const lengths = input[0].split('')
                                .map((_, index) => input[0].charCodeAt(index))
                                .concat([17, 31, 73, 47, 23]);

        let circle = Array.apply(null, { length: circleLength }).map(Number.call, Number)
        let currentIndex = 0;
        let skipSize = 0;

        for (let i = 0; i < 64; i++) {
            lengths.forEach(length => {
                if (length > 1) {
                    circle = Day10.reverseRange(circle, currentIndex, currentIndex + length - 1);
                }
                currentIndex = (currentIndex + length + skipSize) % circle.length;
                skipSize++;
            });
        }
        
        return Day10.computeDenseHash(circle);
    }

}