import { Day08 } from '../challenges/day08';
import { expect } from 'chai';

describe('Day 08', () => {
    const challenge = new Day08();

    it('a(...)', () => {
        expect(challenge.a([
            "b inc 5 if a > 1",
            "a inc 1 if b < 5",
            "c dec -10 if a >= 1",
            "c inc -20 if c == 10"
        ])).to.equal(1);
    });

    it('b(...)', () => {
        expect(challenge.b([
            "b inc 5 if a > 1",
            "a inc 1 if b < 5",
            "c dec -10 if a >= 1",
            "c inc -20 if c == 10"
        ])).to.equal(10);
    });
    
});

