/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateToneRequest } from '../models/CreateToneRequest';
import type { ToneResponseResponseMessage } from '../models/ToneResponseResponseMessage';
import type { UpdateToneRequest } from '../models/UpdateToneRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ToneService {

    /**
     * @param requestBody
     * @returns ToneResponseResponseMessage Success
     * @throws ApiError
     */
    public static postV01Tone(
        requestBody?: CreateToneRequest,
    ): CancelablePromise<ToneResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/tone',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ToneResponseResponseMessage Success
     * @throws ApiError
     */
    public static putV01Tone(
        requestBody?: UpdateToneRequest,
    ): CancelablePromise<ToneResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/tone',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns ToneResponseResponseMessage Success
     * @throws ApiError
     */
    public static getV01Tone(): CancelablePromise<ToneResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/tone',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param id
     * @returns boolean Success
     * @throws ApiError
     */
    public static deleteV01Tone(
        id?: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/tone',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
