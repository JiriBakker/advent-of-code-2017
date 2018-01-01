import { Day06 } from '../challenges/day06';
import { expect } from 'chai';

describe('Day 06', () => {
    const challenge = new Day06();

    it('a(0 2 7 0)', () => {
        expect(challenge.a(["0", "2", "7", "0"])).to.equal(5);
    });

    it('b(0 2 7 0)', () => {
        expect(challenge.b(["0", "2", "7", "0"])).to.equal(4);
    });
    
});

