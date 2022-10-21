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
import {
    ClientConfig,
    UserBlogEntriesResponse,
    UserFriendsResponse,
    UserInfoResponse,
    UserRatedListResponse,
    UserRatingResponse,
    UserStatusResponse
} from "../models";
import { URLUtils } from "../utils";
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

        const userInfoResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.info + "?" + new URLSearchParams(data).toString()
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

    public async getUserBlogEntries(handle: string): Promise<UserBlogEntriesResponse> {

        const data = {
            handle: handle
        }

        const userBlogEntriesResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.blogEntries + "?" + new URLSearchParams(data).toString()
            ),
            {
                headers: GeneralUtils.getHeaders(),
                method: "GET"
            }
        );

        if (userBlogEntriesResponse.status !== 200) {
            const apiError = JSON.stringify(userBlogEntriesResponse.json());
            return Promise.reject(new ForceCodedException(
                "FC_CORE-GUBE-NF",
                "force-coded-core",
                "getUserBlogEntries",
                "",
                "Failed to get a response from user blog entries Endpoint",
                apiError || "test"
            ));
        }

        return Promise.resolve(userBlogEntriesResponse.json())

    }

    public async getUserFriends(onlyOnline?: boolean): Promise<UserFriendsResponse> {

        const data = {
            onlyOnline: onlyOnline?.toString() || ""
        }

        const userFriendsResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.friends + "?" + new URLSearchParams(data).toString()
            ),
            {
                headers: GeneralUtils.getHeaders(),
                method: "GET"
            }
        );

        if (userFriendsResponse.status !== 200) {
            const apiError = JSON.stringify(userFriendsResponse.json());
            return Promise.reject(new ForceCodedException(
                "FC_CORE-GUF-NF",
                "force-coded-core",
                "getUserFriends",
                "",
                "Failed to get a response from user friends Endpoint",
                apiError || "test"
            ));
        }

        return Promise.resolve(userFriendsResponse.json())

    }

    public async getUserRatedList(
        activeOnly?: boolean,
        includeRetired?: boolean,
        contestId?: string
    ): Promise<UserRatedListResponse> {

        const data = {
            contestId: contestId || "",
            includeRetired: includeRetired?.toString() || "",
            onlyOnline: activeOnly?.toString() || ""
        }

        const userRatedListResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.ratedList + "?" + new URLSearchParams(data).toString()
            ),
            {
                headers: GeneralUtils.getHeaders(),
                method: "GET"
            }
        );

        if (userRatedListResponse.status !== 200) {
            const apiError = JSON.stringify(userRatedListResponse.json());
            return Promise.reject(new ForceCodedException(
                "FC_CORE-GURL-NF",
                "force-coded-core",
                "getUserRatedList",
                "",
                "Failed to get a response from user rated list Endpoint",
                apiError || "test"
            ));
        }

        return Promise.resolve(userRatedListResponse.json())

    }

    public async getUserRating(handle: string): Promise<UserRatingResponse> {

        const data = {
            handle: handle
        }

        const userRatingResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.rating + "?" + new URLSearchParams(data).toString()
            ),
            {
                headers: GeneralUtils.getHeaders(),
                method: "GET"
            }
        );

        if (userRatingResponse.status !== 200) {
            const apiError = JSON.stringify(userRatingResponse.json());
            return Promise.reject(new ForceCodedException(
                "FC_CORE-GUR-NF",
                "force-coded-core",
                "getUserRating",
                "",
                "Failed to get a response from user ratings Endpoint",
                apiError || "test"
            ));
        }

        return Promise.resolve(userRatingResponse.json())

    }

    public async getUserStatus(handle: string, from?: number, count?: number): Promise<UserStatusResponse> {

        const data = {
            count: count?.toString() || "",
            from: from?.toString() || "",
            handle: handle
        }

        const userStatusResponse = await fetch(
            URLUtils.generateURL(
                APIMethods.user.status + "?" + new URLSearchParams(data).toString()
            ),
            {
                headers: GeneralUtils.getHeaders(),
                method: "GET"
            }
        );

        if (userStatusResponse.status !== 200) {
            const apiError = JSON.stringify(userStatusResponse.json());
            return Promise.reject(new ForceCodedException(
                "FC_CORE-GUS-NF",
                "force-coded-core",
                "getUserStatus",
                "",
                "Failed to get a response from user status Endpoint",
                apiError || "test"
            ));
        }

        return Promise.resolve(userStatusResponse.json())

    }

}
