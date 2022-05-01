import { render, screen } from "@testing-library/react";
import React from "react";
import Banner from "../Banner";
import "@testing-library/jest-dom";

describe("Banner", () => {
  it("should render Banner element", () => {
    render(<Banner />);
    const BannerElement = screen.getByTestId("full-Banner");
    expect(BannerElement).toBeInTheDocument();
  });
});
