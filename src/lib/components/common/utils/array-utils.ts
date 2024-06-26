import { getRandomIndex } from "./math-utils";

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const getArrRandomIndex = (arr): number => getRandomIndex(arr.length);

export const sortNumberArray = (arr: number[]) => {
    return arr.sort(function(a, b) { return a - b } );
}