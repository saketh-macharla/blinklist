import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const MockLoginPage = () => {
  return <LoginPage />;
};

test(" to check LoginPage name ", () => {
  render(<MockLoginPage />);
  const bodyElement = screen.getByText(/Welcome/i);
  expect(bodyElement).toBeInTheDocument();
});

// test(" to check Login Button ", () => {
//   render(<MockLoginPage />);
//   const bodyElement = screen.getByRole("button", { name: "Login" });
//   fireEvent.click(bodyElement);
//   expect(bodyElement).toBeInTheDocument();
// });

// test(" to check Signup Button ", () => {
//   render(<MockLoginPage />);
//   const bodyElement = screen.getByRole("button", { name: "Signup" });
//   fireEvent.click(bodyElement);
//   expect(bodyElement).toBeInTheDocument();
// });
