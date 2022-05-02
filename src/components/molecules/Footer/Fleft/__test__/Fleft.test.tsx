import { render, screen } from "@testing-library/react";
import React from "react";
import Fleft from "../index";
import "@testing-library/jest-dom";

describe("Fleft", () => {
  it("should render Fleft element", () => {
    render(<Fleft />);
    const FleftElement = screen.getByRole("footer-left");
    expect(FleftElement).toBeInTheDocument();
  });
});
