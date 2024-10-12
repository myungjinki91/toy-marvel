import { render, screen } from "@testing-library/react";
import List from "../List";

test("a", () => {
  render(<List />);
  const element = screen.getByRole("");
  expect(element);
});
