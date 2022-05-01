import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddLibCard from "../index";
import "@testing-library/jest-dom";

const mockfunction = jest.fn();

describe("AddLibCard", () => {
  it("should render AddLibCard element", () => {
    render(
      <AddLibCard
        handleClick={mockfunction}
        id={0}
        imgsrc={""}
        bookName="Bring Your Human To Work"
        authorName="Eric Keswin"
        time="13-minute read"
        nReads="1.9k reads"
        icon1={""}
        icon2={""}
      />
    );
    const AddLibCardElement = screen.getByTestId("AddLib-Card");
    const buttonElement = screen.getByText("Add to library");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
    expect(AddLibCardElement).toBeInTheDocument();
  });
});
