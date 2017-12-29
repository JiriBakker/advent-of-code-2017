import { Day5 } from '../challenges/day5';
import { expect } from 'chai';

describe('Day 5', () => {
    const challenge = new Day5();

    it('a(0 3 0 1 -3)', () => {
        expect(challenge.a(["0", "3", "0", "1", "-3"])).to.equal(5);
    });

    it('b(0 3 0 1 -3)', () => {
        expect(challenge.b(["0", "3", "0", "1", "-3"])).to.equal(10);
    });

   
    
});

