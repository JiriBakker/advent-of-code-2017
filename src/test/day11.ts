import { Day11 } from '../challenges/day11';
import { expect } from 'chai';

describe('Day 11', () => {
    const challenge = new Day11();

    it('a([ne,ne,ne])', () => {
        expect(challenge.a(["ne,ne,ne"])).to.equal(3);
    });

    it('a([ne,ne,sw,sw])', () => {
        expect(challenge.a(["ne,ne,sw,sw"])).to.equal(0);
    });

    it('a([ne,ne,s,s])', () => {
        expect(challenge.a(["ne,ne,s,s"])).to.equal(2);
    });

    it('a([se,sw,se,sw,sw])', () => {
        expect(challenge.b(["se,sw,se,sw,sw"])).to.equal(3);
    });

    it('b([ne,ne,ne])', () => {
        expect(challenge.b(["ne,ne,ne"])).to.equal(3);
    });

    it('b([ne,ne,sw,sw])', () => {
        expect(challenge.b(["ne,ne,sw,sw"])).to.equal(2);
    });

    it('b([ne,ne,s,s])', () => {
        expect(challenge.b(["ne,ne,s,s"])).to.equal(2);
    });

    it('b([se,sw,se,sw,sw])', () => {
        expect(challenge.b(["se,sw,se,sw,sw"])).to.equal(3);
    });
    
});

