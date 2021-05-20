import * as React from "react";
import style from "./index.module.css";
import { Button } from "../../atoms/Button";
import { HandleAnswerDef } from "../../../../commonTypes";

interface QuizScreenDef {
    category: string;
    question: string;
    currentQuestion: number;
    totalQuestions: number;
    handleAnswer: (props: HandleAnswerDef) => void;
}

export const QuizScreen = (props: QuizScreenDef) => {
    const handleSubmit = () => {};

    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <h2>{props.category}</h2>
            </div>

            <div className="">
                <div className="">
                    <p>{props.question}</p>
                </div>

                <p>
                    {props.currentQuestion} of {props.totalQuestions}
                </p>
            </div>

            <div className="">
                <Button
                    buttonClass={style.quizButton}
                    buttonText="True"
                    buttonType="submit"
                />

                <Button
                    buttonClass={style.quizButton}
                    buttonText="False"
                    buttonType="submit"
                />
            </div>
        </form>
    );
};
