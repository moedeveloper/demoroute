/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PoemResponse } from '../models/PoemResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * @param key
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01Search(
        key?: string,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/search',
            query: {
                'key': key,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param key
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01SearchMajles(
        key?: string,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/search/majles',
            query: {
                'key': key,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
