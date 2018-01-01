import { Challenge } from '../util/challenge'

export class Day11 implements Challenge {

    private static reduceOpposingDirections(directionCounts: any, direction: string, opposingDirection: string) {
        const min = Math.min(directionCounts[direction], directionCounts[opposingDirection]);
        directionCounts[direction] -= min;
        directionCounts[opposingDirection] -= min;
    }

    private static flattenDirections(directionCounts: any, direction1: string, direction2: string, opposingDirection: string) {
        const min = Math.min(directionCounts[direction1], directionCounts[direction2]);
        directionCounts[direction1] -= min;
        directionCounts[direction2] -= min;
        directionCounts[opposingDirection] += min;
    }

    private static countSteps(directionCounts: any): number {
        Day11.reduceOpposingDirections(directionCounts, "ne", "sw");
        Day11.reduceOpposingDirections(directionCounts, "nw", "se");
        Day11.reduceOpposingDirections(directionCounts, "n", "s");

        Day11.flattenDirections(directionCounts, "n", "se", "ne");
        Day11.flattenDirections(directionCounts, "n", "sw", "nw");
        Day11.flattenDirections(directionCounts, "s", "nw", "sw");
        Day11.flattenDirections(directionCounts, "s", "ne", "se");
        Day11.flattenDirections(directionCounts, "sw", "se", "s");
        Day11.flattenDirections(directionCounts, "se", "sw", "s");
        Day11.flattenDirections(directionCounts, "nw", "ne", "n");
        Day11.flattenDirections(directionCounts, "ne", "nw", "n");

        return Object.keys(directionCounts).reduce((sum, key) => sum += directionCounts[key], 0)
    }

    private static cloneDirectionCounts(directionCounts: any): any {
        return { 
            "ne": directionCounts["ne"], 
            "n":  directionCounts["n"], 
            "nw": directionCounts["nw"], 
            "se": directionCounts["se"], 
            "sw": directionCounts["sw"], 
            "s":  directionCounts["s"] 
        }
    }

    public a(input: string[]): number {
        const directions = input[0].split(',');
        const directionCounts = 
            directions.reduce((counts, direction) => {
                counts[direction]++;
                return counts;
            }, { "ne": 0, "n": 0, "nw": 0, "se": 0, "sw": 0, "s": 0 });

        return Day11.countSteps(directionCounts);
    }

    public b(input: string[]): number {
        const directions = input[0].split(',');
        let maxSteps = 0;
        const directionCounts = 
            directions.reduce((counts, direction) => {
                counts[direction]++;
                maxSteps = Math.max(maxSteps, Day11.countSteps(Day11.cloneDirectionCounts(counts)));
                return counts;
            }, { "ne": 0, "n": 0, "nw": 0, "se": 0, "sw": 0, "s": 0 });

        return maxSteps;
    }

}