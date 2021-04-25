import {DateTime} from "../types/listing";

/**
 * Calculates current day of the week (0 - 6) and
 * current hour in 24 hour format (0 - 23).
 * @returns DateTime object of current dayOfWeek , hour and minutes
 */
export function getCurrentDateTime(): DateTime {
    const date = new Date();

    return {
        dayOfWeek: date.getDay(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
    }
};