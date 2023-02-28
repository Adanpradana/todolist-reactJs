import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../landing-page/Hero";



test("Hero components should be rendered", () => {
  render(
    <Router>
      <Hero />
    </Router>
  );
  const elementTest = screen.getByText(/get aligned/i);
  expect(elementTest).toBeInTheDocument();

  const image = screen.getByAltText("hero img");
  expect(image.src).toContain("http://localhost/38.png");
  expect(image).toBeInTheDocument();
});

