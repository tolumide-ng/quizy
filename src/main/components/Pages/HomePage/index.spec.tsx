import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { HomePage } from ".";
import { Provider } from "react-redux";
import store from "../../../store";

describe("HomePage Component", () => {
    test("Mounts the Home Page Component", async () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const component = getByLabelText("quizy app");
        expect(component).toBeTruthy();
        expect(component).toHaveTextContent("Trivia");
    });
});
