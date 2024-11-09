import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import LanguageSelector from "../LanguageSelector";

describe("LanguageSelector", () => {
  it("renders a select element with language options", () => {
    render(<LanguageSelector onSelect={() => {}} />);

    // Check that the select and options are rendered
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Spanish" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "French" })).toBeInTheDocument();
  });

  it("calls onSelect with the correct language code when an option is selected", () => {
    const onSelectMock = jest.fn();
    render(<LanguageSelector onSelect={onSelectMock} />);

    const select = screen.getByRole("combobox");

    // Simulate selecting a different language
    fireEvent.change(select, { target: { value: "es" } });
    expect(onSelectMock).toHaveBeenCalledWith("es");

    // Simulate selecting another language
    fireEvent.change(select, { target: { value: "fr" } });
    expect(onSelectMock).toHaveBeenCalledWith("fr");
  });
});
