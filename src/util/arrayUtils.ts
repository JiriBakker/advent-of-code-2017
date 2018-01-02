export class ArrayUtils {

    public static swapPair<T>(array: T[], index1: number, index2: number) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    }
    
    public static reverseRange<T>(array: T[], startIndex: number, endIndex: number): T[] {
        if (endIndex < startIndex) {
            endIndex += array.length;
        }

        while (startIndex < endIndex) {
            ArrayUtils.swapPair(array, startIndex % array.length, endIndex % array.length);
            startIndex++;
            endIndex--;
        }

        return array;
    }

    public static rotateFast<T>(array: T[], amount: number) {
        for (var length = array.length, amount = (Math.abs(amount) >= length && (amount %= length), amount < 0 && (amount += length), amount), i, x; amount; amount = (Math.ceil(length / amount) - 1) * amount - length + (length = amount))
            for (i = length; i > amount; x = array[--i], array[i] = array[i - amount], array[i - amount] = x);
            return array;
    }

    public static rotate<T>(array: T[], amount: number) {
        const output = [];
        for (let i = 0; i < array.length; i++) {
            output[(i + amount) % array.length] = array[i];
        }
        return output;
    }

}