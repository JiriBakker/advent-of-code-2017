import { Day05 } from '../challenges/day05';
import { expect } from 'chai';

describe('Day 05', () => {
    const challenge = new Day05();

    it('a(0 3 0 1 -3)', () => {
        expect(challenge.a(["0", "3", "0", "1", "-3"])).to.equal(5);
    });

    it('b(0 3 0 1 -3)', () => {
        expect(challenge.b(["0", "3", "0", "1", "-3"])).to.equal(10);
    });

   
    
});

