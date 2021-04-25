import fetch from "node-fetch";
import {QueryParameters, Headers} from "../types/dataSource";
import {getQueryString} from "../utils";


export class RestDataSource {
    protected baseUrl: string ='';
    protected headers : Headers = {};
    /**
     * Call to http (get method) url over the network
     * @params : path  - resource after the base url
     * @params : queryParameters  - for sorting and filtering
     * @returns the response from the webservice
     */
    async get<T>(path: string, queryParameters: QueryParameters<T>) {
        const url = `${this.baseUrl}/${path}/?${encodeURI(getQueryString(queryParameters))}`;
        const response = await fetch(url, {headers: this.headers});
        return await response.json();
    }
}

