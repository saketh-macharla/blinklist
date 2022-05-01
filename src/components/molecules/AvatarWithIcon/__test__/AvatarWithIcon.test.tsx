import { render, screen } from "@testing-library/react";
import React from "react";
import AvatarWithIcon from "../../AvatarWithIcon";
import "@testing-library/jest-dom";

const mockFunction = jest.fn();

describe("AvatarWithIcon", () => {
  it("should render AvatarWithIcon element", () => {
    render(<AvatarWithIcon />);
    const AvatarElement = screen.getByText("A");
    expect(AvatarElement).toBeInTheDocument();
  });
});
