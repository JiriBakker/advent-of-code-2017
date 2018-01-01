import { Challenge } from '../util/challenge'

export class Day04 implements Challenge {
    private hasNoDuplicateWords(words: string[]) {
        const wordsFound = {}
        for (let i = 0; i < words.length; i++) {
            if (words[i] in wordsFound) {
                return false;
            }
            wordsFound[words[i]] = true;
        }
        return true;
    }

    public a(input: string[]): number {
        return input.map((line) => line.split(" "))
                    .filter(this.hasNoDuplicateWords)
                    .length;
    }

    public b(input: string[]): number {
        const sortWord = (word) => word.split('').sort().join('');
        return input.map((line) => line.split(" ").map(sortWord))
                    .filter(this.hasNoDuplicateWords)
                    .length;
    }
}