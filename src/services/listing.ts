import {ListingRestDataSource} from "../dataSources/listing";
import {
    GOOD_BYE_MESSAGE,
    LISTING_TABLE_CONFIG,
    NO_FOOD_TRUCK_FOUND_MESSAGE,
    PAGE_LIMIT,
    QUESTIONS_CONFIG
} from "../constants";
import {QueryParameters} from "../types/dataSource";
import {getCurrentDateTime, showPrompt, showTable} from "../utils";
import {toTable} from "../mapper/toTable";

export class ListingService {

    private dataSource = new ListingRestDataSource();

    /**
     * Initial method to start the program
     */
    async start() {
        let resume: boolean;
        let pageNumber: number = 0;

        // showing the initial prompt
        ({initial: resume} = await showPrompt(QUESTIONS_CONFIG.initial));

        // resume:  checks if user wants to continue or exit the program
        while (resume) {

            // getting list of food trucks, one page at a time
            const response = await this.getFoodTrucks(pageNumber);

            // when there are no food trucks open
            if (!response.length && !pageNumber) {
                console.log(NO_FOOD_TRUCK_FOUND_MESSAGE);
                // exiting the program
                resume = false;

                // when the last page has no listings to show
            } else if (!response.length) {
                ({zeroListings: resume} = await showPrompt(QUESTIONS_CONFIG.zeroListings));
                pageNumber = resume ? 0 : pageNumber;

                // when the user is at the last page
            } else if (response.length < PAGE_LIMIT) {
                showTable(toTable(response), LISTING_TABLE_CONFIG);
                ({lastListings: resume} = await showPrompt(QUESTIONS_CONFIG.lastListings));
                pageNumber = resume ? 0 : pageNumber;

                // when there are more listings to show
            } else {
                showTable(toTable(response), LISTING_TABLE_CONFIG);
                ({showNext: resume} = await showPrompt(QUESTIONS_CONFIG.showNext));
                pageNumber++;
            }

        }
        // when user is about to exit
        if (pageNumber) {
            console.log(GOOD_BYE_MESSAGE);
        }

    };

    /**
     * Returns list of currently open food trucks
     * @param pageNumber - number of pages.
     * @returns list of food trucks
     */
    private async getFoodTrucks(pageNumber: number) {

        const options: QueryParameters<string | number> = this.getFoodTruckQueryParams(pageNumber);
        return this.dataSource.getFoodTrucks(options);

    }

    /**
     * Builds search parameter for Socrata API
     * @param pageNumber - number of pages.
     * @returns search parameter string to append to Socrata API call
     */
    getFoodTruckQueryParams(pageNumber: number) {

        const {hour, minutes, dayOfWeek} = getCurrentDateTime();

        const options: QueryParameters<string | number> = {
            $select: 'applicant as businessName, location as location, starttime as opens, endtime as closes',
            $where: `'${hour}:${minutes}' BETWEEN start24 AND end24 AND dayorder=${dayOfWeek}`,
            $order: 'applicant asc',
            $limit: PAGE_LIMIT,
            $offset: pageNumber * PAGE_LIMIT,
        };

        return options;
    }
}