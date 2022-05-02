import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddtoLib from "../../AddToLibrary";
import "@testing-library/jest-dom";

const mockFunction = jest.fn();

describe("AddtoLib", () => {
  it("should render AddtoLib element", () => {
    render(<AddtoLib handleClick={mockFunction} />);
    const buttonElement = screen.getByText("Add to library");
    // fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render AddtoLib element", () => {
    render(<AddtoLib handleClick={mockFunction} />);
    const buttonElement = screen.getByText("Add to library");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});
