import * as React from "react";
import { Button } from "../../atoms/Button";
import style from "./index.module.css";

interface ResultScreenDef {
    results: Array<{}>;
}

export const ResultScreen = (props: ResultScreenDef) => {
    return (
        <article className={style.result}>
            <div className={style.resultTop}>
                <h2>You scored</h2>
                <p>
                    {3}/{10}
                </p>
            </div>

            <div className={style.resultMid}>
                <ul className={style.resultUl}>
                    <li className={style.resultLi}></li>
                </ul>
            </div>

            <div className={style.resultBottom}>
                <Button
                    buttonClass={`${style.resultButton} appButton`}
                    buttonText="play again?"
                    buttonType="button"
                />
            </div>
        </article>
    );
};
