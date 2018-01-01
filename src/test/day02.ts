import { Day02 } from '../challenges/day02';
import { expect } from 'chai';

describe('Day 2', () => {
    const challenge = new Day02();

    it('a(5 1 9 5 - 7 5 3 - 2 4 6 8)', () => {
        expect(challenge.a(
            ["5 1 9 5",
             "7 5 3", 
             "2 4 6 8"])
        ).to.equal(18);
    });

    it('b(5 9 2 8 - 9 4 7 3 - 3 8 6 5)', () => {
        expect(challenge.b(
            ["5 9 2 8",
            "9 4 7 3",
            "3 8 6 5"])
        ).to.equal(9);
    });

    
});

