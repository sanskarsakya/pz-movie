import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);


describe("Card test suite", () => {

    it("should render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BrowserRouter><Card /></BrowserRouter>, div);
    });

    // it("renders card correctly", () => {
    //     const { getByTestId } = render(<Card name="terminator" />);
    //     expect(getByTestId("movie_name")).toHaveTextContent("terminator");
    // });

    // it("renders actor correctly", () => {
    //     const { getByTestId } = render(<Actor name="test name" />);
    //     expect(getByTestId("actor_name")).toHaveTextContent("test name");
    // });

    it("should match snapshot", () => {
        const tree = renderer.create(
        <BrowserRouter>
            <Card id="1" name="terminator" image="test image" vote_average="7.8" popularity="7" year="2020" />
        </BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
