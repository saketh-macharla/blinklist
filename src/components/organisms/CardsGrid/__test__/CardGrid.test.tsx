import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CardGrid from "../index";
import "@testing-library/jest-dom";

const mockFunc = jest.fn();

describe("CardGrid", () => {
  it("should render CardGrid element with AddLib Cards", () => {
    render(
      <CardGrid
        handleClick={mockFunc}
        addtoLib={true}
        details={[
          {
            id: 1,
            finished: true,
            imgsrc: "",
            bookName: "Bring Your Human To Work",
            authorName: "Eric Keswin",
            time: "13-minute read",
            nReads: "1.9k reads",
            icon1: "",
            icon2: "",
          },
        ]}
      />
    );
    const CardGridElement = screen.getByTestId("Card-Grid");
    const AddToLibElement = screen.getByTestId("AddLib-Card");
    const AddToLib = screen.getByText("Add to library");
    fireEvent.click(AddToLib);

    expect(CardGridElement).toBeInTheDocument();
    expect(AddToLibElement).toBeInTheDocument();
    expect(AddToLib).toBeInTheDocument();
  });

  it("should render CardGrid element with RF Cards with Read again", () => {
    render(
      <CardGrid
        handleClick={mockFunc}
        addtoLib={false}
        details={[
          {
            id: 1,
            finished: true,
            imgsrc: "",
            bookName: "Bring Your Human To Work",
            authorName: "Eric Keswin",
            time: "13-minute read",
            nReads: "1.9k reads",
            icon1: "",
            icon2: "",
          },
        ]}
      />
    );
    const CardGridElement = screen.getByTestId("Card-Grid");
    const readNowButton = screen.getByText("Read again");
    const RFElement = screen.getByTestId("RF-Card");
    fireEvent.click(readNowButton);

    expect(CardGridElement).toBeInTheDocument();
    expect(RFElement).toBeInTheDocument();
    expect(readNowButton).toBeInTheDocument();
  });

  it("should render CardGrid element with RF Cards with finished", () => {
    render(
      <CardGrid
        handleClick={mockFunc}
        addtoLib={false}
        details={[
          {
            id: 1,
            finished: false,
            imgsrc: "",
            bookName: "Bring Your Human To Work",
            authorName: "Eric Keswin",
            time: "13-minute read",
            nReads: "1.9k reads",
            icon1: "",
            icon2: "",
          },
        ]}
      />
    );
    const CardGridElement = screen.getByTestId("Card-Grid");
    const finishedButton = screen.getByText("finished");
    const RFElement = screen.getByTestId("RF-Card");
    fireEvent.click(finishedButton);

    expect(CardGridElement).toBeInTheDocument();
    expect(RFElement).toBeInTheDocument();
    expect(finishedButton).toBeInTheDocument();
  });
});
