import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleAnswerDef, QuizQuestionDef } from "../../../commonTypes";
import { fetchQuizAction } from "../../../store/modules/quiz/actions";
import { RootState } from "../../../store/modules/types";

interface ApplicationStateDef {
    answers: Array<{ number: number; verdict: boolean }>;
    screen: number;
    cannotBegin: boolean;
    status: "start" | "quiz" | "end";
    allQuestions: Array<QuizQuestionDef>;
}

export const useAppState = () => {
    const dispatch = useDispatch();

    const TOTAL_QUESTIONS = 10;

    const selector = useSelector((state: RootState) => state.fetchQuizReducer);

    const [appState, setAppState] = React.useState<ApplicationStateDef>({
        answers: [],
        screen: 0,
        cannotBegin: true,
        status: "start",
        allQuestions: [],
    });

    React.useEffect(() => {
        if (selector?.status === "rest") {
            dispatch(
                fetchQuizAction({
                    path: "api.php",
                    method: "GET",
                    payload: {},
                    params: {
                        amount: TOTAL_QUESTIONS,
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
                allQuestions: selector.data,
            }));

            console.log("ALL OF THE QUESTIONS TO SEE>>>>>>>", selector.data);
        }
    }, [selector.status]);

    const handleAnswer = (props: HandleAnswerDef) => {
        setAppState((theAppState) => ({
            ...theAppState,
            answers: [...theAppState.answers, props],
            screen:
                props.number === TOTAL_QUESTIONS - 1
                    ? theAppState.screen
                    : theAppState.screen + 1,
        }));

        if (props.number === TOTAL_QUESTIONS - 1) {
            setAppState((theAppState) => ({
                ...theAppState,
                status: "end",
            }));
        }
    };

    const handlePlayAgain = () => {
        setAppState({
            answers: [],
            screen: 0,
            cannotBegin: false,
            status: "start",
            allQuestions: selector.data,
        });
    };

    const handleBegin = () => {
        console.log("BUTTON CLICKED");
        setAppState((theAppState) => ({
            ...theAppState,
            screen: 0,
            status: "quiz",
        }));
    };

    return {
        appState,
        handleBegin,
        handleAnswer,
        handlePlayAgain,
    };
};
