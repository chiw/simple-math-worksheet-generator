import { MathOperators } from "../../../constants";

export const addAll = (arr: number[]) => arr.reduce((prev, curr) => prev + curr);
export const minusAll = (arr: number[]) => arr.reduce((prev, curr) => prev - curr);
export const multiplyAll = (arr: number[]) => arr.reduce((prev, curr) => prev * curr);
export const divideAll = (arr: number[]) => arr.reduce((prev, curr) => prev / curr);

export const operationMap = new Map<string, Function>([
    [MathOperators.PLUS, addAll],
    [MathOperators.MINUS, minusAll],
    [MathOperators.TIMES, multiplyAll],
    [MathOperators.DIVIDE, divideAll],
]);

export const calculate = (operator: string, numArr: number[]): number => {
    return (operationMap.get(operator))(numArr);
}

export const requiresRemainderCheckMap = (operator) => MathOperators.DIVIDE === operator;

export const getRandomIndex = (seed: number): number => Math.floor(Math.random() * seed);