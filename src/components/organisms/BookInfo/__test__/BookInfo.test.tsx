import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import BookInfo from "../Index";
import "@testing-library/jest-dom";
import mockAxios from "axios";

describe("BookInfo", () => {
  it("should render BookInfo element", () => {
    render(
      <BookInfo
        imgPath=""
        authorName="Codds"
        bookName="React"
        finish={true}
        id={1}
      />
    );
    const BookInfoElement = screen.getByRole("BookInfo");
    expect(BookInfoElement).toBeInTheDocument();
  });

  it("should disable finish button", () => {
    render(
      <BookInfo
        imgPath=""
        authorName="Codds"
        bookName="React"
        finish={true}
        id={1}
      />
    );
    const readNowButton = screen.getByText("Read now");
    const finishedButton = screen.getByText("Finished Reading");
    expect(finishedButton).toBeDisabled();
    expect(readNowButton).not.toBeDisabled();
  });

  it("axios testing", async () => {
    render(
      <BookInfo
        imgPath=""
        authorName="Codds"
        bookName="React"
        finish={true}
        id={1}
      />
    );
    const readNowButton = screen.getByText("Read now");
    fireEvent.click(readNowButton);
    const finishedButton = await screen.findByText("Finished Reading");
    expect(finishedButton).not.toBeDisabled();
  });
});
