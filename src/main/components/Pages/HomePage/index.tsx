import * as React from "react";
import { HomeScreen } from "../../UI/organism/HomeScreeen";
import style from "./index.module.css";
import { useAppState } from "./useAppState";

interface DisplayComponentDef {
    [key: number]: () => { component: JSX.Element };
}

export const HomePage = () => {
    const { appState, handleBegin, handleAnswer, handlePlayAgain } =
        useAppState();

    const displayComponent: DisplayComponentDef = {
        1: () => ({
            component: (
                <HomeScreen
                    handleBegin={handleBegin}
                    cannotBegin={appState.cannotBegin}
                />
            ),
        }),
    };

    return (
        <article className={style.ldpg}>
            <article className={style.ldpgCont}>
                {displayComponent[appState.screen]}
            </article>
        </article>
    );
};
