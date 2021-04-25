import {RestDataSource} from "./rest";
import {SOCRATA_FOOD_TRUCK_URL, FOOD_TRUCKS} from "../constants";
import {QueryParameters} from "../types/dataSource";
import {appHeaders} from "../constants";

export class ListingRestDataSource extends RestDataSource {
    constructor() {
        super();
        this.baseUrl = SOCRATA_FOOD_TRUCK_URL;
        this.headers = appHeaders
    }

    /**
     * Call to http (get method) url over the network to get the food trucks
     * @params : queryParameters  - for sorting and filtering
     * @returns the response from the food truck webservice
     */
    public async getFoodTrucks<T>(queryParameters: QueryParameters<T>= {}) {
        return this.get<T>(FOOD_TRUCKS, queryParameters);
    }
}