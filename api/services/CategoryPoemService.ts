/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryResponseResponseMessage } from '../models/CategoryResponseResponseMessage';
import type { CreateCategoryRequest } from '../models/CreateCategoryRequest';
import type { ResponseMessage } from '../models/ResponseMessage';
import type { UpdateCategoryRequest } from '../models/UpdateCategoryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryPoemService {

    /**
     * @param requestBody
     * @returns CategoryResponseResponseMessage Success
     * @throws ApiError
     */
    public static postV01Categorypoem(
        requestBody?: CreateCategoryRequest,
    ): CancelablePromise<CategoryResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/categorypoem',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns CategoryResponseResponseMessage Success
     * @throws ApiError
     */
    public static putV01Categorypoem(
        requestBody?: UpdateCategoryRequest,
    ): CancelablePromise<CategoryResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/categorypoem',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns CategoryResponseResponseMessage Success
     * @throws ApiError
     */
    public static getV01Categorypoem(): CancelablePromise<CategoryResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/categorypoem',
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
    public static deleteV01Categorypoem(
        id?: string,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/categorypoem',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
