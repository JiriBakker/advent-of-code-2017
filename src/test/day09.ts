import { Day09 } from '../challenges/day09';
import { expect } from 'chai';

describe('Day 09', () => {
    const challenge = new Day09();

    it('a({})', () => expect(challenge.a(["{}"])).to.equal(1));

    it('a({{{}}})', () => expect(challenge.a(["{{{}}}"])).to.equal(6));

    it('a({{},{}})', () => expect(challenge.a(["{{},{}}"])).to.equal(5));
    
    it('a({{{},{},{{}}}})', () => expect(challenge.a(["{{{},{},{{}}}}"])).to.equal(16));

    it('a({<a>,<a>,<a>,<a>})', () => expect(challenge.a(["{<a>,<a>,<a>,<a>}"])).to.equal(1));

    it('a({{<ab>},{<ab>},{<ab>},{<ab>}})', () => expect(challenge.a(["{{<ab>},{<ab>},{<ab>},{<ab>}}"])).to.equal(9));

    it('a({{<!!>},{<!!>},{<!!>},{<!!>}})', () => expect(challenge.a(["{{<!!>},{<!!>},{<!!>},{<!!>}}"])).to.equal(9));

    it('a({{<a!>},{<a!>},{<a!>},{<ab>}})', () => expect(challenge.a(["{{<a!>},{<a!>},{<a!>},{<ab>}}"])).to.equal(3));
  

    it('b(<>)', () => expect(challenge.b(["<>"])).to.equal(0));
    
    it('b(<random characters>)', () => expect(challenge.b(["<random characters>"])).to.equal(17));

    it('b(<<<<>)', () => expect(challenge.b(["<<<<>"])).to.equal(3));

    it('b(<{!>}>)', () => expect(challenge.b(["<{!>}>"])).to.equal(2));

    it('b(<!!>)', () => expect(challenge.b(["<!!>"])).to.equal(0));

    it('b(<!!!>>)', () => expect(challenge.b(["<!!!>>"])).to.equal(0));

    it('b(<{o"i!a,<{i<a>)', () => expect(challenge.b(['<{o"i!a,<{i<a>'])).to.equal(10));
    
});

