import React from "react";
import { render, screen } from "@testing-library/react";
import ShowLoader from "../ShowLoader";

describe("ShowLoader Component", () => {
  it("displays loading text when loading is true", () => {
    render(<ShowLoader loading={true} text="Loading..." />);

    // Check if the loading text is displayed
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass("loading");
  });

  it("does not display loading text when loading is false", () => {
    render(<ShowLoader loading={false} text="Loading..." />);

    // Check that the loading text is not displayed
    const loadingText = screen.queryByText("Loading...");
    expect(loadingText).not.toBeInTheDocument();
  });
});
