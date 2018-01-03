import { Day17 } from '../challenges/day17';
import { expect } from 'chai';

describe('Day 17', () => {
    const challenge = new Day17();

    it('a(3, 5)', () => expect(challenge.a(["3"], 5)).to.equal(2));
    
    it('a(3)', () => expect(challenge.a(["3"])).to.equal(638));

    it('b(3, 5)', () => expect(challenge.b(["3"], 5)).to.equal(5));
    
});

