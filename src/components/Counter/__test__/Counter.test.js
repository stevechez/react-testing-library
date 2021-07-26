import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders correct text", () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter starts initially text 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders a +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("addBtn");

  expect(addBtnEl.textContent).toBe("+");
});

test("add button renders a -", () => {
  const { getByTestId } = render(<Counter />);
  const subBtnEl = getByTestId("subtractBtn");

  expect(subBtnEl.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("click on + btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on - btn subtract 1 from counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtractBtn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("5");
});

test("adding then subtracting leads to correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtractBtn");
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("20");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
});

// test("counter contains correct classname", () => {
//   const { getByTestId } = render(<Counter />);
//   const counterEl = getByTestId("counter");
//   const inputEl = getByTestId("input");
//   const addBtnEl = getByTestId("addBtn");
//   const subtractBtnEl = getByTestId("subtractBtn");

//   expect(counterEl.className).toBe("");

//   fireEvent.change(inputEl, {
//     target: {
//       value: "50",
//     },
//   });

//   fireEvent.click(addBtnEl);
//   expect(counterEl.className).toBe("");
//   fireEvent.click(addBtnEl);
//   expect(counterEl.className).toBe("green");
//   fireEvent.click(addBtnEl);
//   expect(counterEl.className).toBe("green");
//   fireEvent.click(subtractBtnEl);
//   fireEvent.click(subtractBtnEl);
//   expect(counterEl.className).toBe("");

//   fireEvent.click(subtractBtnEl);
//   fireEvent.click(subtractBtnEl);
//   fireEvent.click(subtractBtnEl);
//   fireEvent.click(subtractBtnEl);
//   expect(counterEl.className).toBe("red");
// });
