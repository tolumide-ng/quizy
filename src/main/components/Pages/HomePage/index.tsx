import * as React from "react";
import { HomeScreen } from "../../UI/organism/HomeScreen";
import { QuizScreen } from "../../UI/organism/QuizScreen";
import { ResultScreen } from "../../UI/organism/ResultScreen";
import style from "./index.module.css";
import { useAppState } from "./useAppState";

interface DisplayComponentDef {
    [key: string]: () => JSX.Element;
}

export const HomePage = () => {
    const { appState, handleBegin, handleAnswer, handlePlayAgain } =
        useAppState();

    const displayComponent: DisplayComponentDef = {
        start: () => (
            <HomeScreen
                handleBegin={handleBegin}
                cannotBegin={appState.cannotBegin}
            />
        ),
        quiz: () => (
            <QuizScreen
                handleAnswer={handleAnswer}
                category={appState.allQuestions[appState.screen].category}
                question={appState.allQuestions[appState.screen].question}
                currentQuestion={appState.screen}
                totalQuestions={appState.allQuestions.length}
            />
        ),
        end: () => (
            <ResultScreen
                results={appState.answers}
                handlePlayAgain={handlePlayAgain}
                allQuestions={appState.allQuestions}
                rightAnswers={
                    appState.answers.filter(
                        (answer) => answer.verdict === "right"
                    ).length
                }
            />
        ),
    };

    return (
        <article className={style.ldpg} aria-label="quizy app">
            <article className={style.ldpgCont}>
                {displayComponent[appState.status]()}
            </article>
        </article>
    );
};
