/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessageRequest } from '../models/CreateMessageRequest';
import type { CreateNotificationRequest } from '../models/CreateNotificationRequest';
import type { ResponseMessage } from '../models/ResponseMessage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationMessageService {

    /**
     * @param requestBody
     * @returns ResponseMessage Success
     * @throws ApiError
     */
    public static postV01Notificationmessage(
        requestBody?: CreateNotificationRequest,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/notificationmessage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ResponseMessage Success
     * @throws ApiError
     */
    public static postV01NotificationmessageSendmessage(
        requestBody?: CreateMessageRequest,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/notificationmessage/sendmessage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
