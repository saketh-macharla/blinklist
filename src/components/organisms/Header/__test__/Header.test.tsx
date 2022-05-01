import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../index";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("Header", () => {
  it("should render Header element without Explore popup", () => {
    render(<MockHeader />);
    const HeaderElement = screen.getByRole("Header");
    expect(HeaderElement).toBeInTheDocument();
  });
});
