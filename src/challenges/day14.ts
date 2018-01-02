import { Challenge } from '../util/challenge'
import { HashingUtils } from '../util/hashingUtils'

export class Day14 implements Challenge {

    private static convertToBinaryHash(knotHash: string): string {
        const binaryHash = [];
        for (let i = 0; i < knotHash.length; i+=2) {
            const binary = parseInt(knotHash.substring(i, i+2), 16).toString(2);
            binaryHash.push(HashingUtils.padZeroesLeft(binary, 8));
        }
        return binaryHash.join('');
    }

    private static exploreRegion(grid: number[][], x: number, y: number, regionNr: number) {
        if (grid[y][x] !== 1) {
            return;
        } 

        grid[y][x] = regionNr;
        if (x < 127) {
            Day14.exploreRegion(grid, x+1, y, regionNr);
        }
        if (x > 0) {
            Day14.exploreRegion(grid, x-1, y, regionNr);
        }
        if (y < 127) {
            Day14.exploreRegion(grid, x, y+1, regionNr);
        }
        if (y > 0) {
            Day14.exploreRegion(grid, x, y-1, regionNr);
        }
    }

    public a(input: string[]): number {
        const keyString = input[0];
        let usedCells = 0;
        for (let i = 0; i < 128; i++) {
            const knotHash = HashingUtils.computeKnotHash(`${keyString}-${i}`);
            const binaryHash = Day14.convertToBinaryHash(knotHash).split('').map(char => parseInt(char));
            for (let j = 0; j < binaryHash.length; j++) {
                usedCells += binaryHash[j];
            }
        }
        return usedCells;
    }

    public b(input: string[]): number {
        const keyString = input[0];
        const grid: number[][] = [];
        for (let i = 0; i < 128; i++) {
            const knotHash = HashingUtils.computeKnotHash(`${keyString}-${i}`);
            const binaryHash = Day14.convertToBinaryHash(knotHash);
            grid.push(binaryHash.split('').map(char => parseInt(char)));
        }

        let regionNr = 2;
        for (let x = 0; x < 128; x++) {
            for (let y = 0; y < 128; y++) {
                if (grid[y][x] === 1) {
                    Day14.exploreRegion(grid, x, y, regionNr);
                    regionNr++;
                }
            }
        }
        return regionNr - 2;
    }

}