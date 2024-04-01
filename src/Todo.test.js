import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo List", () => {
  test("renders correctly", () => {
    render(<Todo />);
    const pageHeading = screen.getByRole("heading");
    expect(pageHeading).toBeInTheDocument();
  });
});
