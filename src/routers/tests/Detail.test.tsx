import { render, screen } from "@testing-library/react";
import Detail from "../Detail";

test("a", () => {
  render(<Detail />);
  const element = screen.getByRole("");
  expect(element);
});
