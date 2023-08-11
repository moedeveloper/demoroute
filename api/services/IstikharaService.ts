/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IstikharaResponse } from '../models/IstikharaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IstikharaService {

    /**
     * @param pageNumber
     * @returns IstikharaResponse Success
     * @throws ApiError
     */
    public static getV01IstikharaPagenumber(
        pageNumber?: number,
    ): CancelablePromise<IstikharaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/istikhara/pagenumber',
            query: {
                'pageNumber': pageNumber,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
