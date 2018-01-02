import { Day13 } from '../challenges/day13';
import { expect } from 'chai';

describe('Day 13', () => {
    const challenge = new Day13();

    it('a(...)', () => {
        expect(challenge.a([
            "0: 3",
            "1: 2",
            "4: 4",
            "6: 4"
        ])).to.equal(24);
    });

    it('b(...)', () => {
        expect(challenge.b([
            "0: 3",
            "1: 2",
            "4: 4",
            "6: 4"
        ])).to.equal(10);
    });
    
});

