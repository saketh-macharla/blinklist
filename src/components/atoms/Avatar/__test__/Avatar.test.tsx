import { render, screen } from "@testing-library/react";
import React from "react";
import Avatar from "../../Avatar";
import "@testing-library/jest-dom";

describe("Avatar", () => {
  it("should render Avatar element", () => {
    render(<Avatar children="A" />);
    const inputElement = screen.getByText("A");
    expect(inputElement).toBeInTheDocument();
  });
});
