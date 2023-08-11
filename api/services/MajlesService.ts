/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMajlesRequest } from '../models/CreateMajlesRequest';
import type { MajlesResponse } from '../models/MajlesResponse';
import type { ResponseMessage } from '../models/ResponseMessage';
import type { UpdateMajlesRequest } from '../models/UpdateMajlesRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MajlesService {

    /**
     * @param id
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static getV01Majles(
        id: string,
    ): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/majles/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param shunkNumber
     * @param subCategoryId
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static getV01Majles1(
        shunkNumber?: number,
        subCategoryId?: string,
    ): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/majles',
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
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static postV01Majles(
        requestBody?: CreateMajlesRequest,
    ): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/majles',
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
    public static deleteV01Majles(
        id?: string,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/majles',
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
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static putV01Majles(
        requestBody?: UpdateMajlesRequest,
    ): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/majles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param date
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static getV01MajlesLatestMore(
        date?: string,
    ): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/majles/latest/more',
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
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static getV01MajlesId(
        id?: string,
    ): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/majles/id',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns MajlesResponse Success
     * @throws ApiError
     */
    public static getV01MajlesLatest(): CancelablePromise<MajlesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/majles/latest',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
