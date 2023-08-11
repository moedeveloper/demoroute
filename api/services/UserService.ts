/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { ResponseMessage } from '../models/ResponseMessage';
import type { UserResponse } from '../models/UserResponse';
import type { UserResponseResponseMessage } from '../models/UserResponseResponseMessage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @param requestBody
     * @returns UserResponse Success
     * @throws ApiError
     */
    public static postV01User(
        requestBody?: CreateUserRequest,
    ): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param username
     * @param password
     * @returns UserResponseResponseMessage Success
     * @throws ApiError
     */
    public static getV01User(
        username?: string,
        password?: string,
    ): CancelablePromise<UserResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/user',
            query: {
                'username': username,
                'password': password,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param username
     * @returns ResponseMessage Success
     * @throws ApiError
     */
    public static deleteV01User(
        username?: string,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/user',
            query: {
                'username': username,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
