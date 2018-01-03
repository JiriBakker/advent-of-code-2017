import { Day18 } from '../challenges/day18';
import { expect } from 'chai';

describe('Day 18', () => {
    const challenge = new Day18();

    it('a(...)', () => {
        expect(challenge.a([
            "set a 1",
            "add a 2",
            "mul a a",
            "mod a 5",
            "snd a",
            "set a 0",
            "rcv a",
            "jgz a -1",
            "set a 1",
            "jgz a -2"
        ])).to.equal(4);
    });

    // it('b(...)', () => {
    //     expect(challenge.b([
    //         "snd 1",
    //         "snd 2",
    //         "snd p",
    //         "rcv a",
    //         "rcv b",
    //         "rcv c",
    //         "rcv d"
    //     ])).to.equal(3);
    // });
    
});

