import {FoodTruck} from "../types/listing";
import wrap from 'word-wrap';

/**
 * Transform food truck object into array to print in table format
 * @params : foodTrucks  - list of food truck object
 * @returns string tupple where format is [businessName, location, opens, closes] word wrapped
 */
export const toTable = (foodTrucks: FoodTruck[]) => foodTrucks.map((foodTruck: FoodTruck) => {
    const {businessName, location, opens, closes} = foodTruck;
    return [wrap(businessName), wrap(location), wrap(opens), wrap(closes)];
})

