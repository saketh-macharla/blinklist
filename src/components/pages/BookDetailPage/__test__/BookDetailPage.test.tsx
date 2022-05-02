import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import BookDetailPage from "../index";
import "@testing-library/jest-dom";
import mockAxios from "axios";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const MockPage = () => {
  return (
    <BrowserRouter>
      <BookDetailPage />
    </BrowserRouter>
  );
};
describe("BookDetailPage", () => {
  it("should render BookDetailPage element", () => {
    render(<MockPage />);
    const BookDetailPageElement = screen.getByText("Explore");
    expect(BookDetailPageElement).toBeInTheDocument();
  });

  it("should render BookDetailPage with popoup", () => {
    render(<MockPage />);
    const BookDetailPageElement = screen.getByText("Explore");
    expect(BookDetailPageElement).toBeInTheDocument();

    const HeaderElement = screen.getByRole("Header");
    const ExploreButton = screen.getByText("Explore");

    fireEvent.click(ExploreButton);

    expect(HeaderElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });

  it("should render BookDetailPage with LibraryButton functionality", () => {
    render(<MockPage />);
    const BookDetailPageElement = screen.getByText("Explore");
    expect(BookDetailPageElement).toBeInTheDocument();

    const HeaderElement = screen.getByRole("Header");
    const LibraryButton = screen.getByText("My Library");

    fireEvent.click(LibraryButton);

    expect(HeaderElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
  });

  it("axios testing", async () => {
    act(() => {
      render(<MockPage />);
    });

    const BookDetailPageElement = screen.getByText("Explore");
    const readNowButton = screen.getByText("Read now");

    fireEvent.click(readNowButton);

    const finishedButton = await screen.findByText("Finished Reading");
    expect(finishedButton).not.toBeDisabled();
    expect(BookDetailPageElement).toBeInTheDocument();
    expect(mockAxios.get).toBeCalledTimes(1);
  });
});
