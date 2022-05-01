import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import CustomTypo from "../../CustomTypo";

describe("CustomTypo", () => {
  test("should render CustomTypo element", () => {
    render(<CustomTypo component="div" children="Hi" />);
    const inputElement = screen.getByText(/Hi/i);
    expect(inputElement).toBeInTheDocument();
  });
});
