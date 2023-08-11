/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryResponseResponseMessage } from '../models/CategoryResponseResponseMessage';
import type { CreateCategoryRequest } from '../models/CreateCategoryRequest';
import type { UpdateCategoryRequest } from '../models/UpdateCategoryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryMajlesService {

    /**
     * @param requestBody
     * @returns CategoryResponseResponseMessage Success
     * @throws ApiError
     */
    public static postV01Categorymajles(
        requestBody?: CreateCategoryRequest,
    ): CancelablePromise<CategoryResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/categorymajles',
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
    public static putV01Categorymajles(
        requestBody?: UpdateCategoryRequest,
    ): CancelablePromise<CategoryResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/categorymajles',
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
    public static getV01Categorymajles(): CancelablePromise<CategoryResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/categorymajles',
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
    public static deleteV01Categorymajles(
        id?: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/categorymajles',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
