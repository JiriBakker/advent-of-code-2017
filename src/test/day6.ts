import { Day6 } from '../challenges/day6';
import { expect } from 'chai';

describe('Day 6', () => {
    const challenge = new Day6();

    it('a(0 2 7 0)', () => {
        expect(challenge.a(["0", "2", "7", "0"])).to.equal(5);
    });

    it('b(0 2 7 0)', () => {
        expect(challenge.b(["0", "2", "7", "0"])).to.equal(4);
    });
    
});

