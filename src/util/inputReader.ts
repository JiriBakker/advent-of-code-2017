import fs = require('fs');

export class InputReader {

    public static readInput(dayNumber : number): string[] {
        const filename = dayNumber < 10 ? `day0${dayNumber}.dat` : `day${dayNumber}.dat`; 
        var input = fs.readFileSync(`./inputs/${filename}`, 'utf8');
        return input.split('\n');
    }
    
}