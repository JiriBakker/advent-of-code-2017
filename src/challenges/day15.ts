import { Challenge } from '../util/challenge'
import { HashingUtils } from '../util/hashingUtils'

export class Day15 implements Challenge {

    private static isMatch(generator1Input: number, generator2Input: number) {
        return (generator1Input & 65535) === (generator2Input & 65535);
    }

    private static countMatches(input: string[], nrOfIterations: number, generator1Factor: number = 1, generator2Factor: number = 1): number {
        const parseInput = (line => { 
            const parts = line.split(' ');
            return parseInt(parts[parts.length - 1]);
        });
        let generator1Input = parseInput(input[0]);
        let generator2Input = parseInput(input[1]);

        let matchCount = 0;
        for (let i = 0; i < nrOfIterations; i++) {
            const getNextInput = (currentInput, seed, factor) => {
                do {
                    currentInput = (currentInput * seed) % 2147483647;
                }
                while (currentInput % factor > 0);
                return currentInput;
            }
            generator1Input = getNextInput(generator1Input, 16807, generator1Factor);
            generator2Input = getNextInput(generator2Input, 48271, generator2Factor);

            if (Day15.isMatch(generator1Input, generator2Input)) {
                matchCount++;
            }
        }

        return matchCount;
    }

    public a(input: string[], nrOfIterations: number = 40000000 /* 40M */): number {
        return Day15.countMatches(input, nrOfIterations);
    }

    public b(input: string[], nrOfIterations: number = 5000000 /* 5M */): number {
        return Day15.countMatches(input, nrOfIterations, 4, 8);
    }

}