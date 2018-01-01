import { Day12 } from '../challenges/day12';
import { expect } from 'chai';

describe('Day 12', () => {
    const challenge = new Day12();

    it('a(...)', () => {
        expect(challenge.a([
            "0 <-> 2",
            "1 <-> 1",
            "2 <-> 0, 3, 4",
            "3 <-> 2, 4",
            "4 <-> 2, 3, 6",
            "5 <-> 6",
            "6 <-> 4, 5"
        ])).to.equal(6);
    });

    it('b(...)', () => {
        expect(challenge.b([
            "0 <-> 2",
            "1 <-> 1",
            "2 <-> 0, 3, 4",
            "3 <-> 2, 4",
            "4 <-> 2, 3, 6",
            "5 <-> 6",
            "6 <-> 4, 5"
        ])).to.equal(2);
    });

});

