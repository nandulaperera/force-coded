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
import {
    ClientConfig,
    UserBlogEntriesResponse,
    UserFriendsResponse,
    UserInfoResponse,
    UserRatedListResponse,
    UserRatingResponse,
    UserStatusResponse
} from "./models";

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

    /**
     * This method will return a list of all user's blog entries.
     * @param {string} handle - User's handle. Eg: "noobmaster69"
     *
     * @return {Promise<UserBlogEntriesResponse>} - A Promise that resolves with the
     * [`UserBlogEntriesResponse`](#UserBlogEntriesResponse) object.
     *
     * @example
     * ```
     * ForceCodedClient.getUserBlogEntries("noobmaster69")
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
     * @linkhttps://github.com/nandulaperera/force-coded/tree/master#getUserBlogEntries
     *
     * @memberof ForceCodedClient
     *
    */
    public async getUserBlogEntries(handle: string): Promise<UserBlogEntriesResponse> {
        return this._forceCodedCore.getUserBlogEntries(handle);
    }

    /**
     * This method will return the list users who have participated in at least one rated contest.
     * @param {boolean} activeOnly -   If true then only users, who participated in rated 
     * contest during the last month are returned. 
     * Otherwise, all users with at least one rated contest are returned.
     * @param {boolean} includeRetired -  If true, the method returns all rated users, 
     * otherwise the method returns only users, that were online at last month.
     * @param {string} contestId -  Id of the contest. 
     * It is not the round number. It can be seen in contest URL. For example: /contest/566/status

     *
     * @return {Promise<UserRatedListResponse>} - A Promise that resolves with the
     * [`UserRatedListResponse`](#UserRatedListResponse) object.
     *
     * @example
     * ```
     * ForceCodedClient.getUserRatedList()
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
     * @linkhttps://github.com/nandulaperera/force-coded/tree/master#getUserRatedList
     *
     * @memberof ForceCodedClient
     *
    */
    public async getUserRatedList(
        activeOnly?: boolean,
        includeRetired?: boolean,
        contestId?: string
    ): Promise<UserRatedListResponse> {
        return this._forceCodedCore.getUserRatedList(activeOnly, includeRetired, contestId);
    }

    /**
     * This method will return rating history of the specified user.
     * @param {string} handle -  Codeforces user handle.
     *
     * @return {Promise<UserRatingResponse>} - A Promise that resolves with the
     * [`UserRatingResponse`](#UserRatingResponse) object.
     *
     * @example
     * ```
     * ForceCodedClient.getUserRating("noobmaster69")
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
     * @linkhttps://github.com/nandulaperera/force-coded/tree/master#getUserRating
     *
     * @memberof ForceCodedClient
     *
    */
    public async getUserRating(handle: string): Promise<UserRatingResponse> {
        return this._forceCodedCore.getUserRating(handle);
    }

    /**
     * This method will return rating history of the specified user.
     * @param {string} handle -  Codeforces user handle.
     * @param {number} from -  1-based index of the first submission to return.
     * @param {number} count -  Number of returned submissions.
     *
     * @return {Promise<UserStatusResponse>} - A Promise that resolves with the
     * [`UserStatusResponse`](#UserStatusResponse) object.
     *
     * @example
     * ```
     * ForceCodedClient.getUserStatus("noobmaster69")
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
     * @linkhttps://github.com/nandulaperera/force-coded/tree/master#getUserStatus
     *
     * @memberof ForceCodedClient
     *
    */
    public async getUserStatus(handle: string, from?: number, count?: number): Promise<UserStatusResponse> {
        return this._forceCodedCore.getUserStatus(handle, from, count);
    }

    /**
    * getUserFriends() is temporarily disabled due to Codeforces API authentication issue.
    */

}
