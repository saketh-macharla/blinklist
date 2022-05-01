import { render, screen } from "@testing-library/react";
import React from "react";
import Fright from "../index";
import "@testing-library/jest-dom";

describe("Fright", () => {
  it("should render Fright element", () => {
    render(<Fright />);
    const FrightElement = screen.getByTestId("footer-right");
    expect(FrightElement).toBeInTheDocument();
  });
});
