import * as React from "react";

interface HandleAnswerDef {
    number: number;
    verdict: boolean;
}

interface ApplicationStateDef {
    answers: Array<{ number: number; verdict: boolean }>;
    screen: number;
}

export const useAppState = () => {
    const [appState, setAppState] = React.useState<ApplicationStateDef>({
        answers: [],
        screen: 0,
    });

    const handleAnswer = (props: HandleAnswerDef) => {
        setAppState((theAppState) => ({
            ...theAppState,
            answers: [...theAppState.answers, props],
            screen: theAppState.screen + 1,
        }));
    };

    const handlePlayAgain = () => {
        setAppState({ answers: [], screen: 0 });
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
