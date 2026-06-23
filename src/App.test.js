import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders keyword title", () => {
  render(<App />);
  const title = screen.getByText(/keyword/i);
  expect(title).toBeInTheDocument();
});
