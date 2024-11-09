import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorDisplay from "../ErrorDisplay";

describe("ErrorDisplay", () => {
  it("renders the error message when an error is provided", () => {
    const errorMessage = "Something went wrong";

    render(<ErrorDisplay error={errorMessage} />);

    // Check that the error message is displayed
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it("does not render anything when error is null", () => {
    render(<ErrorDisplay error={null} />);

    // Check that no error message is rendered
    expect(screen.queryByText(/Error:/)).not.toBeInTheDocument();
  });
});
