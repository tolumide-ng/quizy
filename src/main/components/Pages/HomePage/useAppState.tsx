import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizAction } from "../../../store/modules/quiz/actions";
import { RootState } from "../../../store/modules/types";

interface HandleAnswerDef {
    number: number;
    verdict: boolean;
}

interface ApplicationStateDef {
    answers: Array<{ number: number; verdict: boolean }>;
    screen: number;
    cannotBegin: boolean;
}

export const useAppState = () => {
    const dispatch = useDispatch();

    const selector = useSelector((state: RootState) => state.fetchQuizReducer);

    const [appState, setAppState] = React.useState<ApplicationStateDef>({
        answers: [],
        screen: 0,
        cannotBegin: true,
    });

    React.useEffect(() => {
        if (selector?.status === "rest") {
            dispatch(
                fetchQuizAction({
                    path: "api.php",
                    method: "GET",
                    payload: {},
                    params: {
                        amount: 10,
                        difficulty: "hard",
                        type: "boolean",
                    },
                })
            );
        }

        if (selector?.status === "success") {
            setAppState((theAppState) => ({
                ...theAppState,
                cannotBegin: false,
            }));
        }
    }, []);

    const handleAnswer = (props: HandleAnswerDef) => {
        setAppState((theAppState) => ({
            ...theAppState,
            answers: [...theAppState.answers, props],
            screen: theAppState.screen + 1,
        }));
    };

    const handlePlayAgain = () => {
        setAppState({ answers: [], screen: 0, cannotBegin: false });
    };

    const handleBegin = () => {
        setAppState((theAppState) => ({
            ...theAppState,
            screen: 1,
        }));
    };

    return {
        appState,
        handleBegin,
        handleAnswer,
        handlePlayAgain,
    };
};
