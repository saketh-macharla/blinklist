import React from "react";
import { Button, ButtonProps } from "@mui/material";

const Buttons = ({ children, ...rest }: ButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default Buttons;
