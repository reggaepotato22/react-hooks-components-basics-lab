import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App"; // Assuming your App component is in this path

describe("App Component Tests", () => {
  test("renders without errors", () => {
    expect(() => render(<App />)).not.toThrow();
  });

  test("renders the correct child components", () => {
    render(<App />);

    // Use getByRole for semantic elements like navigation
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Use getElementById if your components truly use these IDs
    const homeElement = document.getElementById("home");
    const aboutElement = document.getElementById("about");

    expect(homeElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
  });
});