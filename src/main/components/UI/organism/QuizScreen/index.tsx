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

    const divRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (divRef.current) {
            divRef.current.innerHTML = props.question;
        }
    }, [props.question]);

    return (
        <form onSubmit={handleSubmit} className={style.quiz}>
            <div className="">
                <h2 className={style.quizTitle}>{props.category}</h2>
            </div>

            <div className={style.quizMid}>
                <div className={style.quizQuestionCont}>
                    <div className={style.quizQuestion} ref={divRef}></div>
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
