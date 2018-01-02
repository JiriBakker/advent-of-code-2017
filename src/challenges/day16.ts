import { Challenge } from '../util/challenge'
import { ArrayUtils } from '../util/arrayUtils'

class Program {
    public constructor(letter: string, position: number) {
        this.letter = letter;
        this.position = position;
    }
    public readonly letter: string;
    public position: number;
}

class DanceMove {
    public constructor(action: string, data1: any, data2: any) {
        this.action = action == 's' ? Action.Spin : (action == 'x' ? Action.Exchange : Action.Partner);
        this.data1 = action == 'p' ? data1 : parseInt(data1);
        this.data2 = action != 'x' ? data2 : parseInt(data2);
    }
    public readonly action: Action;
    public readonly data1: any;
    public readonly data2: any;
}

enum Action {
    Spin,
    Exchange,
    Partner
}

export class Day16 implements Challenge {

    private static parseInput(input: string[]): DanceMove[] {
        return input[0].split(',')
                        .map(move => { 
                            const action = move[0];
                            const data = move.substring(1).split('/');
                            return new DanceMove(action, data[0], data[1]);
                        });
    }


    private static initState(nrOfPrograms: number) {
        const letterLookup = {};
        let programs = [];
        for (let i = 0; i < nrOfPrograms; i++) {
            const letter = String.fromCharCode(97 + i);
            programs[i] = new Program(letter, i);
            letterLookup[letter] = programs[i];
        }
        return {
            programs,
            letterLookup
        }
    }

    private static spin(programs: Program[], amount: number) {
        const output = [];
        for (let i = 0; i < programs.length; i++) {
            const newPosition = (i + amount) % programs.length;
            output[newPosition] = programs[i];
            programs[i].position = newPosition;
        }
        return output;
    }

    public static swap(programs: Program[], index1: number, index2: number) {
        const temp = programs[index1];
        programs[index1] = programs[index2];
        programs[index1].position = index1;
        programs[index2] = temp;
        programs[index2].position = index2;
        return programs;
    }

    private static programsToString(programs: Program[]) {
        return programs.sort((a,b) => a.position - b.position)
                        .map(program => program.letter)
                        .join('');
    }

    private static dance(danceMoves: DanceMove[], programs: Program[], letterLookup: any, nrOfPrograms: number, repetitions: number): Program[] {
        const visited = {};
        let finishingCycle = false;
        for (let i = 0; i < repetitions; i++) {
           for (let j = 0; j < danceMoves.length; j++) {
                const move = danceMoves[j];
                switch (move.action) {
                    case Action.Spin:
                        programs = Day16.spin(programs, move.data1);
                        break;
                    case Action.Exchange:
                        Day16.swap(programs, move.data1, move.data2);
                        break;
                    case Action.Partner:
                        const pos1 = letterLookup[move.data1].position;
                        const pos2 = letterLookup[move.data2].position;
                        Day16.swap(programs, pos1, pos2);
                        break;
                }
            }

            const programsString = Day16.programsToString(programs);
            if (!finishingCycle && programsString in visited) {
                const repetitionsInCycle = i - visited[programsString];
                i = visited[programsString] + (repetitionsInCycle * Math.floor(repetitions / repetitionsInCycle));
                finishingCycle = true;
                continue;
            }
            visited[programsString] = i;
        }

        return programs;
    }

    public a(input: string[], nrOfPrograms: number = 16): string {
        const danceMoves = Day16.parseInput(input);
        const state = Day16.initState(nrOfPrograms);

        state.programs = Day16.dance(danceMoves, state.programs, state.letterLookup, nrOfPrograms, 1); 

        return Day16.programsToString(state.programs);

    }

    public b(input: string[], nrOfPrograms: number = 16): string {
        const danceMoves = Day16.parseInput(input);
        const state = Day16.initState(nrOfPrograms);

        state.programs = Day16.dance(danceMoves, state.programs, state.letterLookup, nrOfPrograms, 1000000000 /* 1B */); 

        return Day16.programsToString(state.programs);
    }

}