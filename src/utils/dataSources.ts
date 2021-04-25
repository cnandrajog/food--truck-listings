import {QueryParameters} from "../types/dataSource";
/**
 * Converts object (key value pair) into query string parameter
 * @param params - query string object
 * @returns query string parameter for url
 */
export const getQueryString = <T>(params: QueryParameters<T>) => Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

