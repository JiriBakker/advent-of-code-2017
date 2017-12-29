import { Day3 } from '../challenges/day3';
import { expect } from 'chai';

describe('Day 3', () => {
    const challenge = new Day3();

    it('a(1)', () => {
        expect(challenge.a(["1"])).to.equal(0);
    });

    it('a(12)', () => {
        expect(challenge.a(["12"])).to.equal(3);
    });

    it('a(23)', () => {
        expect(challenge.a(["23"])).to.equal(2);
    });

    it('a(1024)', () => {
        expect(challenge.a(["1024"])).to.equal(31);
    });

    it('b(1)', () => {
        expect(challenge.b(["1"])).to.equal(1);
    });

    it('b(2)', () => {
        expect(challenge.b(["2"])).to.equal(2);
    });

    it('b(3)', () => {
        expect(challenge.b(["3"])).to.equal(4);
    });

    it('b(748)', () => {
        expect(challenge.b(["748"])).to.equal(806);
    });

    it('b(806)', () => {
        expect(challenge.b(["806"])).to.equal(806);
    });
    
    
});

