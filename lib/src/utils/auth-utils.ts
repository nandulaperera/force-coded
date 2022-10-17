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
import { sha512 } from "js-sha512";
import { GeneralUtils } from "./general-utils";
import { AuthParams } from "../models";

export class AuthUtils {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() { }

    public static getAuthorizationParams(apiKey: string, secret: string, method: string, data: any): AuthParams {

        const rand = GeneralUtils.getRandomBytes();
        const time = Date.now().toString();

        //Create API Signature

        const params = {
            ...data,
            apiKey: apiKey,
            time: time
        }

        //Encode the JSON params to a string
        const encodedParams = new URLSearchParams(params).toString();

        const rawApiSig = `${rand}/${method}?${encodedParams}#${secret}`;
        const apiSig = sha512(rawApiSig);

        return {
            "apiKey": apiKey,
            "apiSig": `${rand}${apiSig}`,
            "time": time
        }
    }


}
