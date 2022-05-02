import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AvatarWithIcon from "../../AvatarWithIcon";
import "@testing-library/jest-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const mockFunction = jest.fn();
const MockAvatarLogin = () => {
  return (
    <Auth0Provider domain={""} clientId={""}>
      <AvatarWithIcon handleLogin={mockFunction} logClick={true} />
    </Auth0Provider>
  );
};

describe("AvatarWithIcon", () => {
  it("should render AvatarWithIcon element", () => {
    render(<AvatarWithIcon handleLogin={mockFunction} logClick={true} />);
    const AvatarElement = screen.getByText("A");
    expect(AvatarElement).toBeInTheDocument();
  });

  it("should render AvatarWithIcon element with click", () => {
    render(<AvatarWithIcon handleLogin={mockFunction} logClick={false} />);
    const AvatarLogin = screen.getByTestId("avatarLogin");

    fireEvent.click(AvatarLogin);

    const Logout = screen.getByRole("button", { name: "LogOut" });

    expect(AvatarLogin).toBeInTheDocument();
    expect(Logout).toBeInTheDocument();
  });

  // it("Logout Click", () => {
  //   render(<MockAvatarLogin />);
  //   const AvatarLogin = screen.getByTestId("avatarLogin");
  //   const Logout = screen.getByRole("button", { name: "LogOut" });

  //   fireEvent.click(AvatarLogin);
  //   expect(AvatarLogin).toBeInTheDocument();
  //   expect(Logout).toBeInTheDocument();

  //   fireEvent.click(Logout);
  // });
});
