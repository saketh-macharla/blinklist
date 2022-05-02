import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";

test("renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});

it("should render Header element with Explore popup", () => {
  render(<App />);
  const HeaderElement = screen.getByRole("Header");
  const ExploreButton = screen.getByText("Explore");

  fireEvent.click(ExploreButton);

  expect(HeaderElement).toBeInTheDocument();
  expect(screen.getByTestId("Explore-Popup")).toBeVisible();
});

it("Libray Button Testing", () => {
  render(<App />);
  const HeaderElement = screen.getByRole("Header");
  const LibraryButton = screen.getByRole("Lib-button");

  fireEvent.click(LibraryButton);

  expect(HeaderElement).toBeInTheDocument();
  expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
});
