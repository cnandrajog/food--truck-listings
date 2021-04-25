import {QuestionsConfig} from "../types/terminal";


export const QUESTIONS_CONFIG: QuestionsConfig = {
    initial: [
        {
            type: 'confirm',
            message: `Welcome to the food truck listing!  You will see 10 food trucks at a time ?.\n Do you want to continue ?`,
            name: 'initial'
        }
    ],
    showNext: [
        {
            type: 'confirm',
            message: 'Do you want to see the next food trucks listings ?',
            name: 'showNext'
        }
    ],
    zeroListings: [
        {
            type: 'confirm',
            message: 'Thank you for visiting us ! There are no more food trucks to show at this time \n Do you want to see the listings again ?',
            name: 'zeroListings'
        }
    ],
    lastListings: [
        {
            type: 'confirm',
            message: 'These were the last listings ! There are no more food trucks to show. \n Do you want to see the listings again ?',
            name: 'lastListings'
        }
    ]
};