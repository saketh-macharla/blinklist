import { fireEvent, render, screen } from "@testing-library/react";
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
    expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
  });

  it("should render Header element with Explore popup", () => {
    render(<MockHeader />);
    const HeaderElement = screen.getByRole("Header");
    const ExploreButton = screen.getByText("Explore");

    fireEvent.click(ExploreButton);

    expect(HeaderElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });

  it("Libray Button Testing", () => {
    render(<MockHeader />);
    const HeaderElement = screen.getByRole("Header");
    const LibraryButton = screen.getByText("My Library");

    fireEvent.click(LibraryButton);

    expect(HeaderElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
  });
});
