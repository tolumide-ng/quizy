import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { QuizScreen } from ".";

describe("Quiz Screen Component", () => {
    const props = {
        category: "question",
        question: "the question to assk",
        currentQuestion: 7,
        totalQuestion: 10,
    };

    test("Mounts the Quiz Screen Component", async () => {
        const handleAnswer = jest.fn();

        const { getByLabelText } = render(
            <QuizScreen
                handleAnswer={handleAnswer}
                category={props.category}
                question={props.question}
                currentQuestion={props.currentQuestion}
                totalQuestions={props.totalQuestion}
            />
        );

        const component = getByLabelText("quiz");

        expect(component).toBeTruthy();
        expect(component).toHaveTextContent("True");
        expect(component).toHaveTextContent("False");
        expect(component).toHaveTextContent(props.question);
        expect(component).toHaveTextContent(props.category);
    });

    test("Fires the onClick event when button is clicked", async () => {
        const handleAnswer = jest.fn();

        const { getByLabelText } = render(
            <QuizScreen
                handleAnswer={handleAnswer}
                category={props.category}
                question={props.question}
                currentQuestion={props.currentQuestion}
                totalQuestions={props.totalQuestion}
            />
        );

        const button = getByLabelText("true");

        fireEvent.click(button);

        expect(handleAnswer).toHaveBeenCalled();
    });
});
