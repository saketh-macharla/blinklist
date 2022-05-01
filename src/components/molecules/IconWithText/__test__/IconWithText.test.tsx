import { render, screen } from "@testing-library/react";
import React from "react";
import IconWithText from "../index";
import "@testing-library/jest-dom";

describe("IconWithText", () => {
  it("should render IconWithText element", () => {
    render(<IconWithText Path={""} text="13-minute read" ColGap="5.67px" />);
    const IconWithTextElement = screen.getByTestId("IconWithText");
    expect(IconWithTextElement).toBeInTheDocument();
  });
});
