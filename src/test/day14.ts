import { Day14 } from '../challenges/day14';
import { expect } from 'chai';

describe('Day 14', () => {
    const challenge = new Day14();

    it('a(flqrgnkx)', () => expect(challenge.a(["flqrgnkx"])).to.equal(8108));

    it('b(flqrgnkx)', () => expect(challenge.b(["flqrgnkx"])).to.equal(1242));
    
});

