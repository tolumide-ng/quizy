import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchQuizReducer } from "./quiz/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchQuizReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
