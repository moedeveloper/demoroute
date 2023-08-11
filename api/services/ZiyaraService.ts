/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateZiyaraRequest } from '../models/CreateZiyaraRequest';
import type { ResponseMessage } from '../models/ResponseMessage';
import type { UpdateZiyaraRequest } from '../models/UpdateZiyaraRequest';
import type { ZiyaraResponse } from '../models/ZiyaraResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ZiyaraService {

    /**
     * @param requestBody
     * @returns ZiyaraResponse Success
     * @throws ApiError
     */
    public static postV01Ziyara(
        requestBody?: CreateZiyaraRequest,
    ): CancelablePromise<ZiyaraResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/ziyara',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param id
     * @returns ResponseMessage Success
     * @throws ApiError
     */
    public static deleteV01Ziyara(
        id?: string,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/ziyara',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ZiyaraResponse Success
     * @throws ApiError
     */
    public static putV01Ziyara(
        requestBody?: UpdateZiyaraRequest,
    ): CancelablePromise<ZiyaraResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/ziyara',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns ZiyaraResponse Success
     * @throws ApiError
     */
    public static getV01Ziyara(): CancelablePromise<ZiyaraResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/ziyara',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param id
     * @returns ZiyaraResponse Success
     * @throws ApiError
     */
    public static getV01ZiyaraId(
        id?: string,
    ): CancelablePromise<ZiyaraResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/ziyara/id',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
