import { render, screen } from "@testing-library/react";
import LandingPage from "../landing-page/index";
test("doing first time test", () => {
  render(<LandingPage />);
  const elementTest = screen.getByTestId("test-1");
  expect(elementTest).toBeInTheDocument();
});
