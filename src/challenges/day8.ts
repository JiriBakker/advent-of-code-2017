import { Challenge } from '../util/challenge'

class Instruction {
    public constructor(register: Register, operation: Operation, condition: Condition) {
        this.register = register;
        this.operation = operation;
        this.condition = condition;
    }
    private register: Register;
    private operation: Operation;
    private condition: Condition;

    public execute() {
        if (this.condition.isSatisfied()) {
            this.register.apply(this.operation);
        }
    }
}

class Register {
    public constructor(value: number) {
        this.value = value;
        this.maxValue = value;
    }
    private value: number;
    private maxValue: number;

    public getValue() {
        return this.value;
    }

    public getMaxValue() {
        return this.maxValue;
    }

    public apply(operation: Operation): void {
        this.value = operation.apply(this.value);
        this.maxValue = Math.max(this.value, this.maxValue);
    }
}

class Operation {
    public constructor(keyword: string, value: number) {
        this.keyword = keyword;
        this.value = value;
    }
    private keyword: string;
    private value: number;
    
    public apply(registerValue: number): number {
        if (this.keyword === "inc") {
            return registerValue + this.value;
        }
        if (this.keyword === "dec") {
            return registerValue - this.value;
        }
        return registerValue;
    }
}

class Condition {
    public constructor(register: Register, operator: string, value: number) {
        this.register = register;
        this.operator = operator;
        this.value = value;
    }
    private register: Register;
    private operator: string;
    private value: number;

    public isSatisfied() {
        if (this.operator === ">") {
            return this.register.getValue() > this.value;
        }
        if (this.operator === "<") {
            return this.register.getValue() < this.value;
        }
        if (this.operator === ">=") {
            return this.register.getValue() >= this.value;
        }
        if (this.operator === "<=") {
            return this.register.getValue() <= this.value;
        }
        if (this.operator === "==") {
            return this.register.getValue() == this.value;
        }
        if (this.operator === "!=") {
            return this.register.getValue() != this.value;
        }
        return false;
    }
}

export class Day8 implements Challenge {

    private static getRegister(registerKey: string, registers: any): Register {
        if (!(registerKey in registers)) {
            registers[registerKey] = new Register(0);    
        }
        return registers[registerKey];
    }

    private static parseInstruction(line: string, registers: any) : Instruction {
        const instructionParts = line.split(" ");
        const registerForOperation = Day8.getRegister(instructionParts[0], registers);
        const operation = new Operation(instructionParts[1], parseInt(instructionParts[2]));
        const registerForCondition = Day8.getRegister(instructionParts[4], registers);
        const condition = new Condition(registerForCondition, instructionParts[5], parseInt(instructionParts[6]));
        return new Instruction(registerForOperation, operation, condition);
    }

    private static findMaxValue(registers: any, getValue: (register: Register) => number) {
        let max = Number.MIN_VALUE;
        for (let registerKey in registers) {
            if (registers.hasOwnProperty(registerKey)) {
                if (getValue(registers[registerKey]) > max) {
                    max = getValue(registers[registerKey]);
                }
            }
        }
        return max;
    }

    public a(input: string[]): number {
        const registers = {};
        const instructions = input.map(line => Day8.parseInstruction(line, registers))
                                  .forEach(instruction => instruction.execute());
        
        return Day8.findMaxValue(registers, (register) => register.getValue());
    }

    public b(input: string[]): number {
        const registers = {};
        const instructions = input.map(line => Day8.parseInstruction(line, registers))
                                  .forEach(instruction => instruction.execute());
        
        return Day8.findMaxValue(registers, (register) => register.getMaxValue());
    }

}