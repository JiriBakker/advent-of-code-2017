import { Challenge } from '../util/challenge'

export class Day1 implements Challenge {
    public dayNumber = 1;

    public a(input: string[]): number {
        const digits = input[0].split('');
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] === digits[(i+1) % digits.length]) {
                sum += parseInt(digits[i]);
            }
        }
        return sum;
    }
    public b(input: string[]): number {
        const digits = input[0].split('');
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] === digits[(i+(digits.length / 2)) % digits.length]) {
                sum += parseInt(digits[i]);
            }
        }
        return sum;
    }
}