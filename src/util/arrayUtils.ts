export class ArrayUtils {
    
    public static reverseRange<T>(array: T[], startIndex: number, endIndex: number): T[] {
        const reversePair = (index1, index2) => {
            const temp = array[index1];
            array[index1] = array[index2];
            array[index2] = temp;
        }

        if (endIndex < startIndex) {
            endIndex += array.length;
        }

        while (startIndex < endIndex) {
            reversePair(startIndex % array.length, endIndex % array.length);
            startIndex++;
            endIndex--;
        }

        return array;
    }

}