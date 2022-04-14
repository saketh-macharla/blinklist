// import { Link } from '@mui/material'
// import React from 'react'

// interface LinksProps{
//     children:React.ReactNode,
//     rest:
// }


// const Links = (props:LinksProps) => {
//     const  {children, ...rest}=props;
//   return (
//    <Link {...rest}>
//     {children}
//    </Link>
//   )
// }

// export default Links

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Link from "@mui/material/Link";
import * as React from "react";


export interface LinksIconProps {
  children: React.ReactNode;
  // varaint: "navLink" | "exploreCardButton" | "libraryCardButton";
  clickHandler: () => void;
  clicked: boolean;
}

export default function LinksIcon(props: LinksIconProps) {
  const { children, clicked, ...rest } = props;
  return (
    <>
      <Link
        {...rest}
        underline="hover"
        variant="body1"
        sx={{ display: "flex", alignItems: "center", color: "#03314B" }}
        onClick={() => {
          props.clickHandler()
        }}
      >
        {children}
        {props.clicked ? (
          <KeyboardArrowUp></KeyboardArrowUp>
        ) : (
          <KeyboardArrowDown></KeyboardArrowDown>
        )}
      </Link>
    </>
  );
}