import { 
    FlexDirectionOptions, 
    FlexWrapOptions, 
    FlexJustifyContentOptions, 
    PaperSize
} from "../components/common/worksheet/WorksheetPageConstants";

import { MathOperators } from "./MathsConstants";

import { TwoNumbersQuestionFormat, TwoNumbersWorksheetSize } from "../components/two-numbers/TwoNumbersQuestionConstants";

import type { TwoNumbersQuestionWorksheetConfig, TwoNumbersQuestionGeneratorConfig } from "../components/two-numbers/TwoNumbersQuestionConstants";

import { FunMultiplicationWorksheetSize, type FunMultiplicationQuestionWorksheetConfig } from "../components/fun-multiplications/FunMultiplicationConstants";

import { FunMultiplicationQuestionFormat, type FunMultiplicationQuestionGeneratorConfig, type FunMultiplicationWorksheetConfig } from "../components/fun-multiplications/FunMultiplicationConstants";

export const LargeScreenMinWidth: number = 768;

export type AppFunctionType = {
    id: string,
    label: string,
    route: string
}

export const AppFunction = {
    TWO_NUMBERS : <AppFunctionType>{ 
        id: "twoNumbers", label: "Two numbers",
        route: "/two-numbers"
    } ,
    FUN_MULTIPLICATION: <AppFunctionType>{ 
        id: "funMultiplication", label: "Fun multiplication 1-10",
        route: "/fun-multiplications"
    }
} as const

export const AppFunctionSelectList: AppFunctionType[] = [
    AppFunction.TWO_NUMBERS, 
    AppFunction.FUN_MULTIPLICATION
];

export const getAppFunctionById = (appFunctionId: string): AppFunctionType => {
    // let func: AppFunctionType = AppFunctionSelectList.filter((item: AppFunctionType, index: number) => {
    //     item.id === appFunctionId
    // }).at(0);

    // if(!func) {
    //     func = AppFunction.TWO_NUMBERS;
    // }

    let func: AppFunctionType = undefined;
    AppFunctionSelectList.forEach((item) => {
        if(item.id === appFunctionId) {
            func = item;
        }
    })

    if(func === undefined) func = AppFunction.TWO_NUMBERS;

    console.log('getAppFunctionById func=[' + func.id + ']');

    return func;
}


export type AppPageTopBarFunction = {
    iconButtonName: string;
    fn: any
}

export const AppConstants = {

    DEFAULT_SELECTED_FUNCTION: AppFunction.TWO_NUMBERS.id,

    OPERATOR_OPTIONS: Object.values(MathOperators),

    DEFAULT_QUESTIONS_PER_PAGE: 20,

    DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG: <TwoNumbersQuestionGeneratorConfig>{
        firstNumRange: '2 - 20',
        firstNumReverse: true,
        secondNumRange: '1 - 10',
        secondNumReverse: true,
        resultMin: 0,
        resultMax: 17,
        allowNegative: false,
        allowRemainder: false,
        randomOrder: true,
        questionOperator: [MathOperators.PLUS, MathOperators.MINUS],
    },

    TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG: {
        A4: <TwoNumbersQuestionWorksheetConfig>{
            questionConfig : {
                questionFormat: TwoNumbersQuestionFormat.COLUMN_METHOD,
                showAnswers: false
            },            
            horizonalMethodStyleConfig: {
                fontSize: '50px',
                numberBoxWidth: '18mm',
                numberBoxHeight: '18mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '10px 30px 10px 30px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: TwoNumbersWorksheetSize.A4,
                questionsPerPage: 25
            },
            worksheetCointainerStyleConfig: {                
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.CENTER,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <TwoNumbersQuestionWorksheetConfig>{
            questionConfig : {
                questionFormat: TwoNumbersQuestionFormat.HORIZONTAL_METHOD,
                showAnswers: false
            },            
            horizonalMethodStyleConfig: {
                fontSize: '56px',
                numberBoxWidth: '19mm',
                numberBoxHeight: '19mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: TwoNumbersWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 12
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    },

    DEFAULT_FUN_MULTIPLICATION_QUESTION_GENERATOR_CONFIG: <FunMultiplicationQuestionGeneratorConfig>{
        firstNumRange: '1 - 10',
        firstNumReverse: false,
        secondNumRange: '1 - 10',
        secondNumReverse: false,
        resultMin: 1,
        resultMax: 100,
        allowNegative: false,
        randomOrder: false
    },

    FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG: {
        A4: <FunMultiplicationQuestionWorksheetConfig>{
            questionConfig: {
                showFirstNum: true,
                showSecondNum: false,
                showAnswers: false,
                questionFormat: FunMultiplicationQuestionFormat.HORIZONTAL_METHOD,
                
            },
            horizonalMethodStyleConfig: {
                fontSize: '30px',
                numberBoxWidth: '12mm',
                numberBoxHeight: '12mm',
                numberBoxMargin: '0px 1px 0px 1px',
                operatorBoxMargin: '0px 1px 0px 1px',
                questionContainerMargin: '5px 5px 5px 5px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: FunMultiplicationWorksheetSize.A4,
                questionsPerPage: 10
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.CENTER,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <FunMultiplicationQuestionWorksheetConfig>{
            questionConfig: {
                showFirstNum: true,
                showSecondNum: false,
                showAnswers: false,
                questionFormat: FunMultiplicationQuestionFormat.HORIZONTAL_METHOD,
            },
            horizonalMethodStyleConfig: {
                fontSize: '56px',
                numberBoxWidth: '19mm',
                numberBoxHeight: '19mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: FunMultiplicationWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 12
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    },
} as const;