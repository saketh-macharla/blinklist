import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../index";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("should render Footer element", () => {
    render(<Footer />);
    const FooterElement = screen.getByRole("Footer");
    expect(FooterElement).toBeInTheDocument();
  });
});
