import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-render";

afterEach(cleanup);

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me"></Button>);
  expect(getByTestId("btn")).toHaveTextContent("click me");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="save"></Button>);
  expect(getByTestId("btn")).toHaveTextContent("save");
});

// it("matches snapshot", () => {
//   const tree = renderer.create(<Button label="save"></Button>).toJSON();
//   expect(tree).toMatchSnapshot();
// });
