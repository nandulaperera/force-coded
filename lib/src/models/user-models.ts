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
    result: UserObject[]
}

export interface UserObject {
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

export interface UserBlogEntriesResponse {
    status: string,
    message: string,
    result: userBlogEntriesObject[]
}

export interface userBlogEntriesObject {
    id: number,
    originalLocale: string,
    creationTimeSeconds: number,
    authorHandle: string,
    title: string,
    content?: string,
    locale: string,
    modificationTimeSeconds: number,
    allowViewHistory: boolean,
    tags: string[]
    rating: number
}

export interface UserFriendsResponse {
    status: string,
    message: string,
    result: string[]
}

export interface UserRatedListResponse {
    status: string,
    message: string,
    result: UserObject[]
}

export interface UserRatingResponse {
    status: string,
    message: string,
    result: RatingChange[]
}

export interface RatingChange {
    contestId: number,
    contestName: string,
    handle: string,
    rank: number,
    ratingUpdateTimeSeconds: number,
    oldRating: number,
    newRating: number
}

export interface UserStatusResponse {
    status: string,
    message: string,
    result: Submission[]
}

export interface Submission {
    id: number,
    contestId: number,
    creationTimeSeconds: number,
    relativeTimeSeconds: number,
    problem: Problem,
    author: Party,
    programmingLanguage: string,
    verdict?: Verdict,
    testset: TestSet,
    passedTestCount: number,
    timeConsumedMillis: number,
    memoryConsumedBytes: number
    points: number
}

export enum Verdict {
    FAILED = "FAILED",
    OK = "OK",
    PARTIAL = "PARTIAL",
    COMPILATION_ERROR = "COMPILATION_ERROR",
    RUNTIME_ERROR = "RUNTIME_ERROR",
    WRONG_ANSWER = "WRONG_ANSWER",
    PRESENTATION_ERROR = "PRESENTATION_ERROR",
    TIME_LIMIT_EXCEEDED = "TIME_LIMIT_EXCEEDED",
    MEMORY_LIMIT_EXCEEDED = "MEMORY_LIMIT_EXCEEDED",
    IDLENESS_LIMIT_EXCEEDED = "IDLENESS_LIMIT_EXCEEDED",
    SECURITY_VIOLATED = "SECURITY_VIOLATED",
    CRASHED = "CRASHED",
    INPUT_PREPARATION_CRASHED = "INPUT_PREPARATION_CRASHED",
    CHALLENGED = "CHALLENGED",
    SKIPPED = "SKIPPED",
    TESTING = "TESTING",
    REJECTED = "REJECTED"
}

export enum TestSet {
    SAMPLES = "SAMPLES",
    PRETESTS = "PRETESTS",
    TESTS = "TESTS",
    CHALLENGES = "CHALLENGES",
}

export interface Problem {
    contestId: number,
    problemsetName: string,
    index: string,
    name: string,
    type: ProblemType,
    points: number,
    rating: number,
    tags: string[]
}

export enum ProblemType {
    PROGRAMMING = "PROGRAMMING",
    QUESTION = "QUESTION"
}

export interface Party {
    contestId: number,
    members: Member[],
    participantType: ParticipantType,
    teamId: number,
    teamName: string,
    ghost: boolean,
    room: number,
    startTimeSeconds: number
}

export enum ParticipantType {
    CONTESTANT = "CONTESTANT",
    PRACTICE = "PRACTICE",
    VIRTUAL = "VIRTUAL",
    MANAGER = "MANAGER",
    OUT_OF_COMPETITION = "OUT_OF_COMPETITION"
}

export interface Member {
    handle: string,
    name?: string,
}


