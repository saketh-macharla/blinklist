import { render, screen } from "@testing-library/react";
import React from "react";
import Bleft from "../Bleft";
import "@testing-library/jest-dom";

const mockFunction = jest.fn();

describe("Bleft", () => {
  it("should render Bleft element", () => {
    render(<Bleft />);
    const BleftElement = screen.getByTestId("Banner-left");
    expect(BleftElement).toBeInTheDocument();
  });
});
