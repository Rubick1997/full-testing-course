import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import { replaceCamelWithSpaces } from "./Button";

test("button has correct initial color", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("button turns MidnightBlue when clicked", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("when checkbox is checked button should be disabled", () => {
  render(<Button />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button gray when disabled", () => {
  render(<Button />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("clicked disabled button has gray background and reverts to MidnightBlue", () => {
  render(<Button />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before came-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
