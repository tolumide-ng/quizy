import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ResultScreen } from ".";
import { AnswersDef, QuizQuestionDef } from "../../../../commonTypes";

describe("Result Screen", () => {
    const results: Array<AnswersDef> = [
        { number: 0, verdict: "right" },
        { number: 1, verdict: "wrong" },
    ];

    const allQuestions: Array<QuizQuestionDef> = [
        {
            category: "",
            type: "",
            difficulty: "",
            question: "Smile, live is for the living?",
            correct_answer: "True",
            incorrect_answers: [""],
        },
        {
            category: "",
            type: "",
            difficulty: "",
            question: "Smile, watagwan?",
            correct_answer: "True",
            incorrect_answers: [""],
        },
    ];

    const rightAnswers = 1;

    test("Mounts the component", async () => {
        const handlePlayAgain = jest.fn();

        const { getByLabelText, getByRole } = render(
            <ResultScreen
                results={results}
                allQuestions={allQuestions}
                rightAnswers={rightAnswers}
                handlePlayAgain={handlePlayAgain}
            />
        );

        const component = getByLabelText("result");
        const listElement = getByRole("list");

        expect(component).toBeTruthy();
        expect(component).toHaveTextContent("You scored");
        expect(component).toHaveTextContent(allQuestions[0].question);
        expect(component).toHaveTextContent(allQuestions[1].question);
        expect(component).toHaveTextContent(String(rightAnswers));
        expect(component).toContainElement(listElement);
    });

    test("Calls onClick when button is clicked", async () => {
        const handlePlayAgain = jest.fn();

        const { getByLabelText } = render(
            <ResultScreen
                results={results}
                allQuestions={allQuestions}
                rightAnswers={rightAnswers}
                handlePlayAgain={handlePlayAgain}
            />
        );

        const button = getByLabelText("play again");

        fireEvent.click(button);

        expect(handlePlayAgain).toHaveBeenCalled();
    });
});
