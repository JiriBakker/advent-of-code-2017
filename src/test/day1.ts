import { Day1 } from '../challenges/day1';
import { expect } from 'chai';

// import 'mocha';
describe('Challenge Day1', () => {
    const challenge = new Day1();

    it('should return expected results for part A', () => {
        expect(challenge.a(["1122"])).to.equal(3);
    });

    it('should return expected results for part A', () => {
        expect(challenge.a(["1111"])).to.equal(4);
    });

    it('should return expected results for part A', () => {
        expect(challenge.a(["1234"])).to.equal(0);
    });
    
    it('should return expected results for part A', () => {
        expect(challenge.a(["91212129"])).to.equal(9);
    });

    it('should return expected results for part B', () => {
        expect(challenge.b(["1212"])).to.equal(6);
    });
    
    it('should return expected results for part B', () => {
        expect(challenge.b(["1221"])).to.equal(0);
    });
        
    it('should return expected results for part B', () => {
        expect(challenge.b(["123425"])).to.equal(4);
    });
            
    it('should return expected results for part B', () => {
        expect(challenge.b(["123123"])).to.equal(12);
    });
                
    it('should return expected results for part B', () => {
        expect(challenge.b(["12131415"])).to.equal(4);
    });
});

