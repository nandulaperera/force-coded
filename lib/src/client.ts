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

import { ForceCodedCore } from "./core";
import { ClientConfig, UserInfoResponse } from "./models";

/**
 * This class provides the necessary methods needed to implement ForceCoded.
 *
 * @export
 * @class ForceCodedClient
*/
export class ForceCodedClient {

    private _config: ClientConfig;
    private _forceCodedCore: ForceCodedCore

    /**
    * This is the constructor method that returns an instance of the ForceCodedClient.
    *
    * @param {ClientConfig} config - The configuration object.
    *
    * @example
    * ```
    * const _config = {
            apiKey: "<Your API Key>",
            secret: "<Your API Secret>"
        };
    * const fcClient = new ForceCodedClient(config);
    * ```
    *
    * @link https://github.com/nandulaperera/force-coded/tree/master#constructor
    * @preserve
    */
    constructor(config: ClientConfig) {
        this._config = config;
        this._forceCodedCore = new ForceCodedCore(this._config);
    }


    /**
     * This method will return the user's profile info.
     * @param {string[]} handles - An array of user handles. Eg: ["noobmaster69", "billybob"]
     *
     * @return {Promise<UserInfoResponse>} - A Promise that resolves with the
     * [`UserInfoResponse`](#UserInfoResponse) object.
     *
     * @example
     * ```
     * ForceCodedClient.getUserInfo(["noobmaster69"])
        .then((response) => {
            console.log(response);
            res.status(200).send(response);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
     * ```
     *
     * @linkhttps://github.com/nandulaperera/force-coded/tree/master#getUserInfo
     *
     * @memberof ForceCodedClient
     *
    */
    public async getUserInfo(handles: string[]): Promise<UserInfoResponse> {
        return this._forceCodedCore.getUserInfo(handles);
    }


}
