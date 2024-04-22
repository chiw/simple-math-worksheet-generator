import { AppFunction } from '../../../constants';
import type { WorkSheet, ThreeNumbersQuestion, ThreeNumbersQuestionGeneratorConfig } from '../ThreeNumbersQuestionConstants';
import { shuffleArray, getArrRandomIndex, sortNumberArray } from '../../common/utils/array-utils';
import { parseRange } from '../../../utils/number-ranage-parser-utils';
import { operationMap, calculate } from '../../common/utils/math-utils';
import { MathOperators } from '../../../constants';


export class SimpleMathQuestionUtils {

    static generateThreeNumbersQuestions(threeNumbersQuestionGeneratorConfig: ThreeNumbersQuestionGeneratorConfig): WorkSheet[] {

        console.log('threeNumbersQuestionGeneratorConfig', threeNumbersQuestionGeneratorConfig);

        let num1Arr: number[] = sortNumberArray(parseRange(
            threeNumbersQuestionGeneratorConfig.firstNumRange, threeNumbersQuestionGeneratorConfig.firstNumReverse));
        
        let num2Arr: number[] = sortNumberArray(parseRange(
            threeNumbersQuestionGeneratorConfig.secondNumRange, threeNumbersQuestionGeneratorConfig.secondNumReverse));

        let num3Arr: number[] = sortNumberArray(parseRange(
            threeNumbersQuestionGeneratorConfig.thirdNumRange, threeNumbersQuestionGeneratorConfig.thirdNumReverse));

        // let worksheetData = this.generateThreeNumbersQuestionsWithParam(
        //     num1Arr,
        //     num2Arr,
        //     num3Arr,
        //     threeNumbersQuestionGeneratorConfig.resultMin,
        //     threeNumbersQuestionGeneratorConfig.resultMax,
        //     threeNumbersQuestionGeneratorConfig.questionOperator,
        //     threeNumbersQuestionGeneratorConfig.allowNegative,            
        //     threeNumbersQuestionGeneratorConfig.randomOrder);

        let worksheetData = this.generateThreeNumbersQuestionsWithParam(
            num1Arr,
            num2Arr,
            num3Arr,
            threeNumbersQuestionGeneratorConfig.resultMin,
            threeNumbersQuestionGeneratorConfig.resultMax,
            threeNumbersQuestionGeneratorConfig.questionOperator,
            threeNumbersQuestionGeneratorConfig.allowNegative,            
            threeNumbersQuestionGeneratorConfig.randomOrder,
            threeNumbersQuestionGeneratorConfig.maxNumberOfQuestions
        );

        console.log('generateThreeNumbersQuestions worksheetData: ', worksheetData);

        return worksheetData;
    }

    // private static generateThreeNumbersQuestionsWithParam(
    //     num1Arr: number[], num2Arr: number[], num3Arr: number[],
    //     resultMin: number, resultMax: number,
    //     operators: string[],
    //     allowNegative: boolean, randomOrder: boolean): WorkSheet[] {

    //     let questionArr: ThreeNumbersQuestion[] = [];

    //     for (const operator of operators) {
    //         for (const num1 of num1Arr) {
    //             for (const num2 of num2Arr) {
    //                 for (const num3 of num3Arr) {
    //                     let answer = calculate(operator, [num1, num2, num3]);
    //                     if (!(!allowNegative && answer < 0)
    //                         && !(resultMin && resultMin > answer)
    //                         && !(resultMax && resultMax < answer)
    //                         /* && !(!allowRemainder && requiresRemainderCheckMap(operator) && (num1 % num2 > 0) */
    //                         ) {
    //                         questionArr.push(this.createThreeNumbersQuestionType(num1, num2, num3, operator, answer));
    //                     }
    //                 }
    //             }
    //         }
    //     }

    //     if (randomOrder) {
    //         shuffleArray(questionArr);
    //     }

    //     // return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
    //     return [<WorkSheet>{ questions: questionArr }];
    // }

    private static generateThreeNumbersQuestionsWithParam(
        sortedNum1Arr: number[], sortedNum2Arr: number[], sortedNum3Arr: number[],
        resultMin: number, resultMax: number,
        operators: string[],
        allowNegative: boolean, randomOrder: boolean, maxNumberOfQuestions: number): WorkSheet[] {

        let questionArr: ThreeNumbersQuestion[] = [];

        let maxTry = 500;
        let tryCount = 0;

        while(questionArr.length < maxNumberOfQuestions && tryCount < maxTry) {
            let firstOperator: string = operators[getArrRandomIndex(operators)];
            let secondOperator: string = operators[getArrRandomIndex(operators)];
       
            let threeNumbersQuestion: ThreeNumbersQuestion = this.generateThreeNumbersQuestion(sortedNum1Arr, sortedNum2Arr, sortedNum3Arr, 
                resultMin, resultMax, firstOperator, secondOperator, 
                allowNegative);

            if (this.isValidQuestion(threeNumbersQuestion, resultMin, resultMax)) {
                questionArr.push(threeNumbersQuestion);
                tryCount = 0;
            } else {
                console.log('generateThreeNumbersQuestionsWithParam invalid threeNumbersQuestion, will not insert to the list: ', threeNumbersQuestion);
                tryCount += 1;
            }
        }        

        if (randomOrder) {
            shuffleArray(questionArr);
        }

        // return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
        return [<WorkSheet>{ questions: questionArr }];
    }

    private static generateThreeNumbersQuestion(sortedNum1Arr: number[], sortedNum2Arr: number[], sortedNum3Arr: number[],
        resultMin: number, resultMax: number,
        firstOperator: string, secondOperator: string,
        allowNegative: boolean): ThreeNumbersQuestion {

        let maxTry = 100;

        let tryCount = maxTry;

        let num1 = sortedNum1Arr[getArrRandomIndex(sortedNum1Arr)];
        
        let filteredSortedNum2Arr = this.filterSecondNumArr(sortedNum2Arr, num1, firstOperator);
        let num2 = filteredSortedNum2Arr[getArrRandomIndex(filteredSortedNum2Arr)];
                
        let twoNumsResult = calculate(firstOperator, [num1, num2]);

        let num3 = 0;
        let threeNumsResult = 0;

        while(tryCount > 0) {        

            let filteredSortedNum3Arr = this.filterSecondNumArr(sortedNum3Arr, twoNumsResult, secondOperator);
            num3 = filteredSortedNum3Arr[getArrRandomIndex(filteredSortedNum3Arr)];

            threeNumsResult = calculate(secondOperator, [twoNumsResult, num3]);

            if (!(!allowNegative && threeNumsResult < 0)
                && !(resultMin && resultMin > threeNumsResult)
                && !(resultMax && resultMax < threeNumsResult) 
            ) {
                // console.log('generateThreeNumbersQuestion valid num3: ', num3);
                tryCount = 0;
            } else {
                console.log('generateThreeNumbersQuestion invalid num3: ', num3 , 'num1: ', num1, 'num2: ', num2, ' twoNumsResult: ', twoNumsResult, 'secondOperator: ', secondOperator, '');
                tryCount += 1;
            }
        }

        return this.createThreeNumbersQuestionType(num1, num2, num3, firstOperator, secondOperator, threeNumsResult);
    }

    private static filterSecondNumArr(secondNumArr: number[], num1: number, operator: string): number[] {
        if(operator != MathOperators.MINUS) {
            return secondNumArr;
        }

        return secondNumArr.filter((num) => num <= num1);
    }

    private static isValidQuestion(threeNumbersQuestion: ThreeNumbersQuestion, 
        resultMin: number, resultMax: number): boolean {
            return threeNumbersQuestion && threeNumbersQuestion.answer >= resultMin && threeNumbersQuestion.answer <= resultMax;
    }

    

    private static createThreeNumbersQuestionType(num1: number, num2: number, num3: number, firstOperator: string, secondOperator: string, answer: number): ThreeNumbersQuestion {
        return <ThreeNumbersQuestion>{
            questionType: AppFunction.THREE_NUMBERS.id,
            num1: num1,
            num2: num2,
            num3: num3,
            firstOperator: firstOperator,
            secondOperator: secondOperator,
            answer: answer
        }
    }


}