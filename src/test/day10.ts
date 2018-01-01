import { Day10 } from '../challenges/day10';
import { expect } from 'chai';

describe('Day 10', () => {
    const challenge = new Day10();

    it('a([3,4,1,5], 5)', () => {
        expect(challenge.a(["3,4,1,5"], 5)).to.equal(12);
    });
    
    it('a([1,1,1,1,1,1,1,8], 10)', () => {
        expect(challenge.a(["1,1,1,1,1,1,1,8"], 10)).to.equal(6);
    });

    it('a([0], 10)', () => {
        expect(challenge.a(["0"], 10)).to.equal(0);
    });

    it('a([10], 10)', () => {
        expect(challenge.a(["10"], 10)).to.equal(72);
    });

    it('toHex([64, 7, 255])', () => {
        expect(Day10.toHex([64, 7, 255])).to.equal("4007ff");
    });

    // it('a(...)', () => {
    //     expect(challenge.a([
    //         "b inc 5 if a > 1",
    //         "a inc 1 if b < 5",
    //         "c dec -10 if a >= 1",
    //         "c inc -20 if c == 10"
    //     ])).to.equal(1);
    // });

    // it('b(...)', () => {
    //     expect(challenge.b([
    //         "b inc 5 if a > 1",
    //         "a inc 1 if b < 5",
    //         "c dec -10 if a >= 1",
    //         "c inc -20 if c == 10"
    //     ])).to.equal(10);
    // });
    
});

