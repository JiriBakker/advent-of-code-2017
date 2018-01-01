import { Challenge } from '../util/challenge'

export class Day02 implements Challenge {
    private static parseSheet(input: string[]): number[][] {
        let isDigit = (char) => !isNaN(parseInt(char));
        return input.map((row) => {
            let isParsingNumber = false;
            let numberStartIndex = 0;
            let numbers = [];
            for (let i = 0; i < row.length; i++) {
                if (isDigit(row[i])) {
                    if (!isParsingNumber) {
                        numberStartIndex = i;
                    }
                    isParsingNumber = true;
                    if (i == row.length - 1) {
                        numbers.push(parseInt(row.substring(numberStartIndex)));
                    }
                }
                else if (isParsingNumber) {
                    numbers.push(parseInt(row.substring(numberStartIndex, i)));
                    isParsingNumber = false;
                }
            }
            return numbers;
        });
    }

    public a(input: string[]): number {
        const sheet = Day02.parseSheet(input);
        let sum = 0;
        sheet.forEach((numbers) => {
            let min = Number.MAX_VALUE;
            let max = 0;
            for (let i = 0; i < numbers.length; i++) {
                max = Math.max(numbers[i], max);
                min = Math.min(numbers[i], min);
            }
            sum += (max - min);
        });
        return sum;
    }
    public b(input: string[]): number {
        const sheet = Day02.parseSheet(input);
        let sum = 0;
        sheet.forEach((numbers) => {
            for (let i = 0; i < numbers.length; i++) {
                for (let j = i + 1; j < numbers.length; j++) {
                    const max = Math.max(numbers[i], numbers[j]);
                    const min = Math.min(numbers[i], numbers[j])
                    if (max % min === 0) {
                        sum += max / min;
                    }
                }
            }
        });
        return sum;
    }
}