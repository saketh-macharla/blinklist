import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import RFCard from "../index";
import "@testing-library/jest-dom";

const mockfunction = jest.fn();

describe("RFCard", () => {
  it("should render RFCard element with finished button", () => {
    render(
      <RFCard
        handleClick={mockfunction}
        id={0}
        imgsrc={""}
        bookName="Bring Your Human To Work"
        authorName="Eric Keswin"
        time="13-minute read"
        nReads="1.9k reads"
        icon1={""}
        icon2={""}
        finished={false}
      />
    );
    const RFCardElement = screen.getByTestId("RF-Card");
    const buttonElement = screen.getByText("finished");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
    expect(RFCardElement).toBeInTheDocument();
  });

  it("should render RFCard element with Read now button", () => {
    render(
      <RFCard
        handleClick={mockfunction}
        id={0}
        imgsrc={""}
        bookName="Bring Your Human To Work"
        authorName="Eric Keswin"
        time="13-minute read"
        nReads="1.9k reads"
        icon1={""}
        icon2={""}
        finished={true}
      />
    );
    const RFCardElement = screen.getByTestId("RF-Card");
    const buttonElement = screen.getByText("Read again");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
    expect(RFCardElement).toBeInTheDocument();
  });
});
