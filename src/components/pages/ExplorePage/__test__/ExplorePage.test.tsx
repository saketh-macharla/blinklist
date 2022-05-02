import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ExplorePage from "../Index";
import "@testing-library/jest-dom";
import mockAxios from "axios";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const MockPage = () => {
  return (
    <BrowserRouter>
      <ExplorePage />
    </BrowserRouter>
  );
};
describe("ExplorePage", () => {
  it("should render ExplorePage element", () => {
    render(<MockPage />);
    const ExplorePageElement = screen.getByText("Explore");
    expect(ExplorePageElement).toBeInTheDocument();
  });

  it("should render ExplorePage with popup", () => {
    render(<MockPage />);
    const ExploreButton = screen.getByText("Explore");

    fireEvent.click(ExploreButton);

    expect(ExploreButton).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });

  it("should render ExplorePage with LibButton", () => {
    render(<MockPage />);
    const ExploreButton = screen.getByText("Explore");
    const LibraryButton = screen.getByText("My Library");

    fireEvent.click(LibraryButton);

    expect(ExploreButton).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
  });
});
