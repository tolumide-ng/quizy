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
    const handleAnswer = (verdict: boolean) => {
        props.handleAnswer({
            number: props.currentQuestion,
            verdict,
        });
    };

    const divRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (divRef.current) {
            divRef.current.innerHTML = props.question;
        }
    }, [props.question]);

    return (
        <article className={style.quiz}>
            <div className={style.quizTop}>
                <h2 className="appTitle">{props.category}</h2>
                {props.currentQuestion}
            </div>

            <div className={style.quizMid}>
                <div className={style.quizQuestionCont}>
                    <div className={style.quizQuestion} ref={divRef}></div>
                </div>

                <p>
                    {props.currentQuestion + 1} of {props.totalQuestions}
                </p>
            </div>

            <div className={style.quizBottom}>
                <Button
                    buttonClass={`${style.quizButton} appButton`}
                    buttonText="True"
                    buttonType="button"
                    handleClick={() => handleAnswer(true)}
                />

                <Button
                    buttonClass={`${style.quizButton} appButton`}
                    buttonText="False"
                    buttonType="button"
                    handleClick={() => handleAnswer(false)}
                />
            </div>
        </article>
    );
};
