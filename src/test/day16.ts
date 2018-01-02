import { Day16 } from '../challenges/day16';
import { expect } from 'chai';

describe('Day 16', () => {
    const challenge = new Day16();

    it('a(s1,x3/4,pe/b, 5)', () => expect(challenge.a(["s1,x3/4,pe/b"], 5)).to.equal("baedc"));

    it('a(s1)', () => expect(challenge.a(["s1"], 5)).to.equal("eabcd"));
    it('a(s5)', () => expect(challenge.a(["s5"], 5)).to.equal("abcde"));
    it('a(s12)', () => expect(challenge.a(["s12"], 5)).to.equal("deabc"));

    it('a(x0/1)', () => expect(challenge.a(["x0/1"], 5)).to.equal("bacde"));
    it('a(x0/4)', () => expect(challenge.a(["x0/4"], 5)).to.equal("ebcda"));
    it('a(x3/4)', () => expect(challenge.a(["x3/4"], 5)).to.equal("abced"));

    it('a(pa/b)', () => expect(challenge.a(["pa/b"], 5)).to.equal("bacde"));
    it('a(pa/e)', () => expect(challenge.a(["pa/e"], 5)).to.equal("ebcda"));
    it('a(pd/e)', () => expect(challenge.a(["pd/e"], 5)).to.equal("abced"));

    it('a(s12,x13/14,pn/o, 15)', () => expect(challenge.a(["s12,x13/14,pn/o"], 15)).to.equal("defghijklmonacb"));
    
});

