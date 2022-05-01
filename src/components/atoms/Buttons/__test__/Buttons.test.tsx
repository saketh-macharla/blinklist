import { render, screen } from "@testing-library/react";
import React from "react";
import Buttons from "../Buttons";
import "@testing-library/jest-dom";

describe("Buttons", () => {
  it("should render Buttons element", () => {
    render(<Buttons children="ReadNow" />);
    const inputElement = screen.getByText("ReadNow");
    expect(inputElement).toBeInTheDocument();
  });
});
