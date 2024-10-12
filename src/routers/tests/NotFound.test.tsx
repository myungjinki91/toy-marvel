import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

test("a", () => {
  render(<NotFound />);
  const element = screen.getByRole("");
  expect(element);
});
