import { Day1 } from '../challenges/day1';
import { expect } from 'chai';

describe('Day 1', () => {
    const challenge = new Day1();

    it('a(1122)', () => {
        expect(challenge.a(["1122"])).to.equal(3);
    });

    it('a(1111)', () => {
        expect(challenge.a(["1111"])).to.equal(4);
    });

    it('a(1234)', () => {
        expect(challenge.a(["1234"])).to.equal(0);
    });
    
    it('a(91212129)', () => {
        expect(challenge.a(["91212129"])).to.equal(9);
    });

    it('b(1212)', () => {
        expect(challenge.b(["1212"])).to.equal(6);
    });
    
    it('b(1221)', () => {
        expect(challenge.b(["1221"])).to.equal(0);
    });
        
    it('b(123425)', () => {
        expect(challenge.b(["123425"])).to.equal(4);
    });
            
    it('b(123123)', () => {
        expect(challenge.b(["123123"])).to.equal(12);
    });
                
    it('b(12331415)', () => {
        expect(challenge.b(["12131415"])).to.equal(4);
    });
});

