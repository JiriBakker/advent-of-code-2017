import { Challenge } from '../util/challenge'

export class Day06 implements Challenge {

    private static findMaxIndex(banks: number[]) {
        let maxValue = 0;
        let maxIndex = 0;
        for (let i = 0; i < banks.length; i++) {
            if (banks[i] > maxValue) {
                maxValue = banks[i];
                maxIndex = i
            }
        }
        return maxIndex;
    }

    private static redistribute(banks: number[], bankToRedestributeIndex: number) : number[] {
        let amountRemaining = banks[bankToRedestributeIndex];
        banks[bankToRedestributeIndex] = 0;
        let curIndex = bankToRedestributeIndex;
        while (amountRemaining > 0) {
            curIndex = (curIndex + 1) % banks.length;
            banks[curIndex]++;
            amountRemaining--;
        }
        return banks;
    }

    private static getBankStateKey(banks: number[]) {
        return banks.join("_");
    }

    public a(input: string[]): number {
        let banks = input.map(val => parseInt(val));
        const visitedBankStates = {};

        let stepCounter = 0;
        while (!(Day06.getBankStateKey(banks) in visitedBankStates)) {
            visitedBankStates[Day06.getBankStateKey(banks)] = true;
            const maxIndex = Day06.findMaxIndex(banks);
            banks = Day06.redistribute(banks, maxIndex);
            stepCounter++;
        }

        return stepCounter;
    }

    public b(input: string[]): number {
        let banks = input.map(val => parseInt(val));
        const visitedBankStates = {};

        let stepCounter = 0;
        while (!(Day06.getBankStateKey(banks) in visitedBankStates)) {
            visitedBankStates[Day06.getBankStateKey(banks)] = stepCounter;
            const maxIndex = Day06.findMaxIndex(banks);
            banks = Day06.redistribute(banks, maxIndex);
            stepCounter++;
        }

        return stepCounter - visitedBankStates[Day06.getBankStateKey(banks)];
    }
}