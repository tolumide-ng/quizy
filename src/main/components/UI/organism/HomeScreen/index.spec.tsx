import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { HomeScreen } from ".";

describe("Home Screen Component", () => {
    test("Mounts the Home Screen Component", async () => {
        const handleBegin = () => jest.fn();

        const { getByLabelText } = render(
            <HomeScreen handleBegin={handleBegin} cannotBegin={true} />
        );

        const component = getByLabelText("article");
        const button = getByLabelText("button");

        expect(component).toBeTruthy();
        expect(component).toHaveTextContent("Welcome");
        expect(component).toHaveTextContent("questions");
        expect(component).toContainElement(button);
        expect(button).toHaveTextContent("Please Wait");
    });

    test("Should not fire onClick event if the button is disabled", async () => {
        const handleBegin = jest.fn();

        const { getByLabelText } = render(
            <HomeScreen handleBegin={handleBegin} cannotBegin={true} />
        );

        const button = getByLabelText("button");

        fireEvent.click(button);
        expect(handleBegin).toHaveBeenCalledTimes(0);
        expect(button).toHaveTextContent("Please Wait");
    });

    test("Should fire onClick event if the button", async () => {
        const handleBegin = jest.fn();

        const { getByLabelText } = render(
            <HomeScreen handleBegin={handleBegin} cannotBegin={false} />
        );

        const button = getByLabelText("button");

        fireEvent.click(button);
        expect(handleBegin).toHaveBeenCalledTimes(1);
        expect(button).toHaveTextContent("Begin");
    });
});
