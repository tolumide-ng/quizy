import actionTypes from "../actionTypes";
import { quizState as initialState } from "..";
import { FetchQuizStateDef, FetchQuizTypeDefs } from "../types";

const fetchQuizTypes = [...actionTypes];

export const fetchQuizReducer = (
    state = initialState,
    fetchQuizStateProps: FetchQuizTypeDefs
): FetchQuizStateDef => {
    return fetchQuizTypes.includes(fetchQuizStateProps.type)
        ? { ...state, ...fetchQuizStateProps.payload }
        : state;
};
