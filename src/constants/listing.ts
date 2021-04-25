import {TableOptions} from "../types/listing";

export const FOOD_TRUCKS = '/resource/jjew-r69b.json';
export const LISTING_TABLE_CONFIG: TableOptions =
{
    style: {head: ['green']},
    head: ['Business Name', 'Location', 'Opens' , 'Closes'],
    colWidths: [50,50,10,10]
};

export const NO_FOOD_TRUCK_FOUND_MESSAGE = 'No open food trucks at this time. Please try again in sometime !';
export const GOOD_BYE_MESSAGE = 'Good Bye. See you again !';

export const appHeaders : Record<string, string> = {
    'Accept': 'application/json',
    'X-App-Token': 'MgziawJZE3UwaM1JELZsOoQcW'
};
