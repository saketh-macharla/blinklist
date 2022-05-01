import { render, screen } from "@testing-library/react";
import React from "react";
import Explore from "../index";
import "@testing-library/jest-dom";

const mockfunction = jest.fn();

describe("Explore", () => {
  it("should render Explore element", () => {
    render(<Explore handleChange={mockfunction} />);
    const ExploreElement = screen.getByRole("Explore");
    expect(ExploreElement).toBeInTheDocument();
  });
});
