import {prompt, QuestionCollection} from 'inquirer';
import Table from 'cli-table';
import {TableOptions} from "../types/listing";

/**
 * Prompts for user interaction.
 * @returns Boolean value of user interaction. Y -> true | N -> false
 */
export const showPrompt = (questions: QuestionCollection)  => {
    return prompt(questions);
}

/**
 *
 * Prints a tabular view of contents using cli-table library
 * @param data - contents to print
 * @param options - control options for the table. Refer to PrinterOptions
 *
 */
export const showTable =(data: any[], config: TableOptions)  => {
    const table = new Table(config);
    table.push(...data);
    console.log(table.toString());
}