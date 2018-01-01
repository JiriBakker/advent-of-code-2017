import { Day04 } from '../challenges/day04';
import { expect } from 'chai';

describe('Day 04', () => {
    const challenge = new Day04();

    it('a(aa bb cc dd ee)', () => {
        expect(challenge.a(["aa bb cc dd ee"])).to.equal(1);
    });

    it('a(aa bb cc dd aa)', () => {
        expect(challenge.a(["aa bb cc dd aa"])).to.equal(0);
    });

    it('a(aa bb cc dd aaa)', () => {
        expect(challenge.a(["aa bb cc dd aaa"])).to.equal(1);
    });

    it('b(abcde fghij)', () => {
        expect(challenge.b(["abcde fghij"])).to.equal(1);
    });

    it('b(abcde xyz ecdab)', () => {
        expect(challenge.b(["abcde xyz ecdab"])).to.equal(0);
    });

    it('b(a ab abc abd abf abj)', () => {
        expect(challenge.b(["a ab abc abd abf abj"])).to.equal(1);
    });

    it('b(iiii oiii ooii oooi oooo)', () => {
        expect(challenge.b(["iiii oiii ooii oooi oooo"])).to.equal(1);
    });

    it('b(oiii ioii iioi iiio)', () => {
        expect(challenge.b(["oiii ioii iioi iiio"])).to.equal(0);
    });
    
});

