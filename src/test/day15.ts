import { Day15 } from '../challenges/day15';
import { expect } from 'chai';

describe('Day 15', () => {
    const challenge = new Day15();

    it('a(65, 8921, 5)', () => {
        expect(challenge.a([
            "Generator A starts with 65",
            "Generator B starts with 8921"
        ], 5)).to.equal(1);
    });

    it('a(65, 8921, 5)', () => {
        expect(challenge.b([
            "Generator A starts with 65",
            "Generator B starts with 8921"
        ], 5)).to.equal(0);
    });

    it('a(65, 8921, 1056)', () => {
        expect(challenge.b([
            "Generator A starts with 65",
            "Generator B starts with 8921"
        ], 1056)).to.equal(1);
    });

    // SLOW TEST! (~1000ms)
    // it('a(65, 8921)', () => {
    //     expect(challenge.b([
    //         "Generator A starts with 65",
    //         "Generator B starts with 8921"
    //     ])).to.equal(309);
    // });
    
});

