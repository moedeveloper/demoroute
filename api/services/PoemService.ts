/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePoemRequest } from '../models/CreatePoemRequest';
import type { PoemResponse } from '../models/PoemResponse';
import type { ResponseMessage } from '../models/ResponseMessage';
import type { UpdatePoemRequest } from '../models/UpdatePoemRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PoemService {

    /**
     * @param id
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01Poem(
        id: string,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/poem/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01PoemLatest(): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/poem/latest',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param shunkNumber
     * @param subCategoryId
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01Poem1(
        shunkNumber?: number,
        subCategoryId?: string,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/poem',
            query: {
                'shunkNumber': shunkNumber,
                'subCategoryId': subCategoryId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static postV01Poem(
        requestBody?: CreatePoemRequest,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/poem',
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
    public static deleteV01Poem(
        id?: string,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/poem',
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
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static putV01Poem(
        requestBody?: UpdatePoemRequest,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/poem',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param date
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01PoemLatestMore(
        date?: string,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/poem/latest/more',
            query: {
                'date': date,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param id
     * @returns PoemResponse Success
     * @throws ApiError
     */
    public static getV01PoemId(
        id?: string,
    ): CancelablePromise<PoemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/poem/id',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
