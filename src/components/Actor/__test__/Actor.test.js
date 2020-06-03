import React from "react";
import ReactDOM from "react-dom";

import Actor from "../Actor";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

afterEach(cleanup);


describe("Actor test suite", () => {

    it("render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Actor />, div);
    });

    it("renders actor correctly", () => {
        const { getByTestId } = render(<Actor name="puzan sakya" />);
        expect(getByTestId("actor_name")).toHaveTextContent("puzan sakya");
    });

    it("renders actor correctly", () => {
        const { getByTestId } = render(<Actor name="test name" />);
        expect(getByTestId("actor_name")).toHaveTextContent("test name");
    });

    it("match actor snapshot", () => {
        const tree = renderer.create(<Actor name="test" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
