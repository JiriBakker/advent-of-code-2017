import { Challenge } from '../util/challenge'

class State {
    public constructor(registerSeed: number) {
        this.pos = 0;
        this.registers = State.initRegisters(26, registerSeed);
        this.sentFrequencies = [];
        this.receivedFrequencies = [];
    }
    public pos: number;
    public registers: any;
    public sentFrequencies: number[];
    public receivedFrequencies: number[];

    private static initRegisters(nrOfRegisters: number, registerSeed: number): any {
        const registers = {};
        for (let i = 0; i < nrOfRegisters; i++) {
            registers[String.fromCharCode(97 + i)] = registerSeed;
        }
        return registers;
    }
}

export class Day18 implements Challenge {

    private static parseInput(input: string[]): any[] {
        return input.map(line => {
            const parts = line.split(' ');
            return {
                "operation": parts[0],
                "registerOrValue1": parts[1],
                "registerOrValue2": parts[2]   
            }
        });
    }

    private static applyInstructions(state: State, stateToReceiveFrom: State, instructions: any[], getElementFunc: (array: number[]) => number) {
        const registers = state.registers;
        while (state.pos >= 0 && state.pos < instructions.length) {
            const instruction = instructions[state.pos];

            const getValue = (input) => {
                let value = parseInt(input);
                if (isNaN(value)) {
                    value = parseInt(registers[input]);
                }
                return value;
            }

            if (instruction.operation == "snd") {
                const value = getValue(instruction.registerOrValue1);
                state.sentFrequencies.push(value);
                state.pos++;
            }
            else if (instruction.operation == "rcv") {
                if (stateToReceiveFrom.sentFrequencies.length > 0) {
                    const frequency = getElementFunc.call(stateToReceiveFrom.sentFrequencies);
                    const register = instruction.registerOrValue1;
                    state.receivedFrequencies.push(frequency);
                    state.registers[register] = frequency;
                    state.pos++;
                }
                return;
            }
            else if (instruction.operation == "jgz") {
                const registerValue = getValue(instruction.registerOrValue1);
                if (registerValue > 0) {
                    const jumpValue = getValue(instruction.registerOrValue2);
                    state.pos += jumpValue;
                }
                else {
                    state.pos++;
                }
            }
            else {
                const value = getValue(instruction.registerOrValue2);
                const register = instruction.registerOrValue1;
                if (instruction.operation == "set") {
                    registers[register] = value;
                }
                else if (instruction.operation == "add") {
                    registers[register] += value;
                }
                else if (instruction.operation == "mul") {
                    registers[register] *= value;
                }
                else if (instruction.operation == "mod") {
                    registers[register] %= value;
                }
                state.pos++;
            }
        }
    }

    public a(input: string[]): number {
        const instructions = Day18.parseInput(input);
        const state = new State(0);

        Day18.applyInstructions(state, state, instructions, Array.prototype.pop);

        return state.receivedFrequencies[state.receivedFrequencies.length - 1];
    }

    public b(input: string[]): number {
        const instructions = Day18.parseInput(input);
        const program0State = new State(0);
        const program1State = new State(1);

        do {
            Day18.applyInstructions(program0State, program1State, instructions, Array.prototype.shift);
            Day18.applyInstructions(program1State, program0State, instructions, Array.prototype.shift);
        }
        while (program0State.sentFrequencies.length > 0 || program1State.sentFrequencies.length > 0);

        return program0State.receivedFrequencies.length;
    }

}