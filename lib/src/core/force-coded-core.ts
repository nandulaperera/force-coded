/**
 * Copyright (c) 2022, Nandula Perera (https://github.com/nandulaperera) All Rights Reserved.
 *
 * Nandula Perera licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { APIMethods } from "../constants";
import { ForceCodedException } from "../exception";
import { ClientConfig, UserInfoResponse } from "../models";
import { AuthUtils, URLUtils } from "../utils";
import { GeneralUtils } from "../utils/general-utils";

export class ForceCodedCore {

    private _config: ClientConfig;

    constructor(config: ClientConfig) {
        this._config = config;
    }

    public async getUserInfo(handles: string[]): Promise<UserInfoResponse> {

        //Create a string of handles seperated by semicolon
        const data = {
            handles: handles.join(";")
        }

        //Get the hashed auth params
        const authParams = AuthUtils.getAuthorizationParams(
            this._config.apiKey,
            this._config.secret,
            APIMethods.user.info,
            data
        );

        //Construct the request data object
        const requestData = {
            ...authParams,
            ...data
        }

        const userInfoResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.info + "?" + new URLSearchParams(requestData).toString()
            ),
            {
                headers: GeneralUtils.getHeaders(),
                method: "GET"
            }
        );

        if (userInfoResponse.status !== 200) {
            const apiError = JSON.stringify(userInfoResponse.json());
            return Promise.reject(new ForceCodedException(
                "FC_CORE-GUI-NF",
                "force-coded-core",
                "getUserInfo",
                "",
                "Failed to get a response from user info Endpoint",
                apiError || "test"
            ));
        }

        return Promise.resolve(userInfoResponse.json())

    }

}
