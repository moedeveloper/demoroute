/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNotificationDeviceRequest } from '../models/CreateNotificationDeviceRequest';
import type { NotificationDeviceResponseResponseMessage } from '../models/NotificationDeviceResponseResponseMessage';
import type { UpdateNotificationDeviceRequest } from '../models/UpdateNotificationDeviceRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationDeviceService {

    /**
     * @param deviceId
     * @returns NotificationDeviceResponseResponseMessage Success
     * @throws ApiError
     */
    public static getV01Notificationdevice(
        deviceId?: string,
    ): CancelablePromise<NotificationDeviceResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0.1/notificationdevice',
            query: {
                'DeviceId': deviceId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns NotificationDeviceResponseResponseMessage Success
     * @throws ApiError
     */
    public static putV01Notificationdevice(
        requestBody?: UpdateNotificationDeviceRequest,
    ): CancelablePromise<NotificationDeviceResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v0.1/notificationdevice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns NotificationDeviceResponseResponseMessage Success
     * @throws ApiError
     */
    public static postV01Notificationdevice(
        requestBody?: CreateNotificationDeviceRequest,
    ): CancelablePromise<NotificationDeviceResponseResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0.1/notificationdevice',
            body: requestBody,
            mediaType: 'application/json',
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
    public static deleteV01Notificationdevice(
        id?: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v0.1/notificationdevice',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
