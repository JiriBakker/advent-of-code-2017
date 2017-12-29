import * as challenges from './challenges/_index';
import { InputReader } from './util/inputReader';
import { Challenge } from './util/challenge';


class InstanceLoader {
    static getInstance<T>(context: Object, name: string, ...args: any[]) : T {
        var instance = new challenges[name]();
        return <T> instance;
    }
}

var challengeArg = process.env.npm_config_challenge;

var dayNumber = parseInt(challengeArg.substr(0, challengeArg.length - 1));
var dayPart = challengeArg[challengeArg.length-1];

var challenge = InstanceLoader.getInstance<Challenge>(global, "Day" + dayNumber);

console.log(`===== Day ${dayNumber} part ${dayPart} =====\n`);

var input = InputReader.readInput(dayNumber)
console.log(`Output: ${challenge[dayPart](input)}`);
