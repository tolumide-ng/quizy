import * as React from "react";
import { AnswersDef, QuizQuestionDef } from "../../../../commonTypes";
import { Button } from "../../atoms/Button";
import style from "./index.module.css";

interface ResultScreenDef {
    results: Array<AnswersDef>;
    allQuestions: Array<QuizQuestionDef>;
    rightAnswers: number;
    handlePlayAgain: () => void;
}

export const ResultScreen = (props: ResultScreenDef) => {
    return (
        <article className={style.result} aria-label="result">
            <div className={style.resultTop}>
                <h2 className="appTitle">You scored</h2>
                <p className="appTitle">
                    {props.rightAnswers} / {props.allQuestions.length}
                </p>
            </div>

            <div className={style.resultMid}>
                <ul className={style.resultUl} role="list">
                    {props.results.map((result) => (
                        <li
                            className={style.resultLi}
                            key={result.number}
                            role="listItem"
                        >
                            <p className={style.resultVerdict}>
                                {result.verdict === "wrong" ? "-" : "+"}
                            </p>{" "}
                            <p className={style.resultQuestion}>
                                {props.allQuestions[result.number].question}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={style.resultBottom}>
                <Button
                    buttonClass={`${style.resultButton} appButton`}
                    buttonText="play again?"
                    buttonType="button"
                    handleClick={props.handlePlayAgain}
                    buttonAriaLabel="play again"
                />
            </div>
        </article>
    );
};
