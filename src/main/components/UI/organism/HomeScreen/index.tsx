import * as React from "react";
import { Button } from "../../atoms/Button";
import style from "./index.module.css";

interface HomeScreenDef {
    handleBegin: () => void;
    cannotBegin: boolean;
}

export const HomeScreen = (props: HomeScreenDef) => {
    return (
        <article className={style.home} aria-label="article">
            <h2 className="appTitle">
                Welcome to the <br /> Trivia Challenge!
            </h2>

            <p className={style.homeDescription}>
                You will be presented <br /> with 10 True or False <br />{" "}
                questions.
            </p>

            <p className={style.homeQuestion}>Can you score 100%?</p>

            <Button
                buttonClass={`${style.homeButton} appButton`}
                buttonText={props.cannotBegin ? "Please Wait" : "Begin"}
                buttonType="button"
                handleClick={props.handleBegin}
                buttonDisabled={props.cannotBegin}
                buttonAriaLabel="button"
            />
        </article>
    );
};
