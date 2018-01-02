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

    it('b([], 256)', () => {
        expect(challenge.b([""], 256)).to.equal("a2582a3a0e66e6e86e3812dcb672a272");
    });

    it('b([AoC 2017], 256)', () => {
        expect(challenge.b(["AoC 2017"], 256)).to.equal("33efeb34ea91902bb2f59c9920caa6cd");
    });

    it('b([1,2,3], 256)', () => {
        expect(challenge.b(["1,2,3"], 256)).to.equal("3efbe78a8d82f29979031a4aa0b16a9d");
    });

    it('b([1,2,4], 256)', () => {
        expect(challenge.b(["1,2,4"], 256)).to.equal("63960835bcdc130f0b66d7ff4f6a5a8e");
    });

});

