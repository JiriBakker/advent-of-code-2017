import { ArrayUtils } from './arrayUtils';

export class HashingUtils {
   
    private static computeDenseHash(circle: number[]): string {
        const denseHash = [];
        for (let i = 0; i < circle.length / 16; i++) {
            let hash = 0;
            for (let j = 0; j < 16; j++) {
                hash = hash ^ circle[i*16 + j];
            }
            denseHash.push(hash);
        }
        return HashingUtils.toHex(denseHash);
    }

    private static toHex(denseHash: number[]): string {
        return denseHash.map(hash => {
            let hexHash = hash.toString(16);
            return HashingUtils.padZeroesLeft(hexHash, 2);
        }).join('');
    }

    public static padZeroesLeft(input: string, length: number): string {
        while (input.length < length) {
            input = `0${input}`;
        }
        return input;
    }

    public static computeKnotHash(input: string, circleLength: number = 256) {
        const lengths = input.split('')
                             .map((_, index) => input.charCodeAt(index))
                             .concat([17, 31, 73, 47, 23]);

        let circle = Array.apply(null, { length: circleLength }).map(Number.call, Number)
        let currentIndex = 0;
        let skipSize = 0;

        for (let i = 0; i < 64; i++) {
            lengths.forEach(length => {
                if (length > 1) {
                    circle = ArrayUtils.reverseRange(circle, currentIndex, currentIndex + length - 1);
                }
                currentIndex = (currentIndex + length + skipSize) % circle.length;
                skipSize++;
            });
        }
        
        return HashingUtils.computeDenseHash(circle);
    }
    
}