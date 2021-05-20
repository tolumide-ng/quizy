import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import { ForAxiosDefs, QuizStateDef } from "../../commonTypes";

export interface RootState {
    dropDownReducer: {
        display: boolean;
    };
    fetchQuizReducer: {
        status: StateStatusType;
        error: string | null;
        data: QuizStateDef;
    };
}

export type StateStatusType = "pending" | "failure" | "success" | "rest";

export interface StoreActionPropsDefs {
    path: string;
    payload: {};
    method: ForAxiosDefs;
    params?: {};
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateDef,
    unknown,
    Action<string>
>;
