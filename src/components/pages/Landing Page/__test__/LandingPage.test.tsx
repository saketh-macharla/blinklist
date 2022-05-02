import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LandingPage from "../index";
import "@testing-library/jest-dom";
import mockAxios from "axios";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const MockPage = () => {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
};
describe("LandingPage", () => {
  it("should render LandingPage element", () => {
    render(<MockPage />);
    const LandingPageElement = screen.getByText("Explore");
    expect(LandingPageElement).toBeInTheDocument();
  });

  it("should render LandingPage element with popoup", () => {
    render(<MockPage />);
    const LandingPageElement = screen.getByText("Explore");
    const LibraryButton = screen.getByRole("Lib-button");

    fireEvent.click(LibraryButton);

    fireEvent.click(LandingPageElement);

    expect(LandingPageElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });

  it("should render LandingPage element with readagain", () => {
    render(<MockPage />);
    const LandingPageElement = screen.getByText("Explore");
    const LibraryButton = screen.getByRole("Lib-button");

    fireEvent.click(LibraryButton);

    fireEvent.click(LandingPageElement);

    expect(LandingPageElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });
});
