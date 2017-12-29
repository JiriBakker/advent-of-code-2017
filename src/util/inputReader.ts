import fs = require('fs');

export class InputReader {

    public static readInput(dayNumber : number): string[] {
        var input = fs.readFileSync(`./inputs/day${dayNumber}.dat`, 'utf8');
        return input.split('\n');
    }
    
}