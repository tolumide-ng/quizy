import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    FETCH_QUIZ_FAILURE,
    FETCH_QUIZ_PENDING,
    FETCH_QUIZ_SUCCESS,
} from "../actionTypes";

export const fetchQuizPending = () => ({
    type: FETCH_QUIZ_PENDING,
    payload: {
        status: "pending",
        error: null,
        data: {},
    },
});

export const fetchQuizFailure = (error: string) => ({
    type: FETCH_QUIZ_FAILURE,
    payload: {
        status: "failure",
        error,
        data: {},
    },
});

export const fetchQuizSuccess = (data: {}) => ({
    type: FETCH_QUIZ_SUCCESS,
    payload: {
        status: "success",
        error: null,
        data,
    },
});

export const fetchQuizAction =
    (props: StoreActionPropsDefs): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchQuizPending());
            const response = await axiosCall(props);
            dispatch(fetchQuizSuccess(response?.data));
        } catch (error) {
            fetchQuizFailure(error?.message);
        }
    };
