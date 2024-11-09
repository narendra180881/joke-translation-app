// ShowLoader.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import JokeDisplay from "../JokeDisplay";

describe("JokeDisplay", () => {
  it("should render the joke when provided", () => {
    const joke =
      "Why did the scarecrow win an award? Because he was outstanding in his field!";

    render(<JokeDisplay joke={joke} />);

    const jokeElement = screen.getByText(joke);
    expect(jokeElement).toBeInTheDocument();
  });

  it("should render nothing when joke is null", () => {
    const { container } = render(<JokeDisplay joke={null} />);

    // Select the element by class name
    const jokeElement = container.querySelector(".joke-display");

    // Assert that the joke element is null, meaning it wasn't rendered
    expect(jokeElement).toBeNull();
  });
});
