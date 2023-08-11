/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSubCategoryRequest } from '../models/CreateSubCategoryRequest';
import type { ResponseMessage } from '../models/ResponseMessage';
import type { SubCategoryResponse } from '../models/SubCategoryResponse';
import type { UpdateSubCategoryRequest } from '../models/UpdateSubCategoryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubCategoryPoemService {

    /**
     * @param requestBody
     * @returns SubCategoryResponse Success
     * @throws ApiError
     */
    public static postV01Subcategorypoem(
        requestBody?: CreateSubCategoryRequest,
    ): CancelablePromise<SubCategoryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/subcategorypoem',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns SubCategoryResponse Success
     * @throws ApiError
     */
    public static putV01Subcategorypoem(
        requestBody?: UpdateSubCategoryRequest,
    ): CancelablePromise<SubCategoryResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/subcategorypoem',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns SubCategoryResponse Success
     * @throws ApiError
     */
    public static getV01Subcategorypoem(): CancelablePromise<SubCategoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/subcategorypoem',
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
    public static deleteV01Subcategorypoem(
        id?: string,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/subcategorypoem',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param id
     * @returns SubCategoryResponse Success
     * @throws ApiError
     */
    public static getV01Subcategorypoem1(
        id: string,
    ): CancelablePromise<SubCategoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/subcategorypoem/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}