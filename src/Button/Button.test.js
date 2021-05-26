import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

test("button has correct initial color", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button has correct initial test", () => {});

test("button turns blue when clicked", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change to red");
});
