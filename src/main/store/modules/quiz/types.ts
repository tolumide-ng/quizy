import { StateStatusType } from "../types";
import {
    FETCH_QUIZ_FAILURE,
    FETCH_QUIZ_PENDING,
    FETCH_QUIZ_SUCCESS,
} from "./actionTypes";

export interface FetchQuizStateDef {
    readonly error: string | null;
    readonly status: StateStatusType;
    readonly data: object;
}

export interface FetchQuizPendingActionDef {
    type: typeof FETCH_QUIZ_PENDING;
    payload: FetchQuizStateDef;
}

export interface FetchQuizFailureActionDef {
    type: typeof FETCH_QUIZ_FAILURE;
    payload: FetchQuizStateDef;
}

export interface FetchQuizSuccessActionDef {
    type: typeof FETCH_QUIZ_SUCCESS;
    payload: FetchQuizStateDef;
}

export type FetchQuizTypeDefs =
    | FetchQuizPendingActionDef
    | FetchQuizFailureActionDef
    | FetchQuizSuccessActionDef;
