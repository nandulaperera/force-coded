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

export interface UserInfoResponse {
    status: string,
    message: string,
    result: userObject
}

export interface userObject {
    handle: string,
    email?: string,
    vkId?: string,
    openId?: string,
    firstName?: string,
    lastName?: string,
    country?: string,
    city?: string,
    organization?: string,
    contribution?: number,
    rank: string,
    rating: number,
    maxRank: string,
    maxRating: number,
    lastOnlineTimeSeconds: string,
    registrationTimeSeconds: string
    friendOfCount: number,
    avatar?: string,
    titlePhoto?: string,
}
