/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenResponse } from '../models/TokenResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RefreshTokenService {

    /**
     * @returns TokenResponse Success
     * @throws ApiError
     */
    public static postV01Refreshtoken(): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/refreshtoken',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
