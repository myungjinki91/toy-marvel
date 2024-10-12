import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("a", () => {
  render(<Home />);
  const element = screen.getByRole("");
  expect(element);
});
