import React from 'react'
import { Button } from '@mui/material'
import {customStyles} from '../../../theme'
import { ButtonProps} from '@mui/material';


// interface ButtonsProps{
//   children:React.ReactNode,
//   variant?: "text" | "outlined" | "contained",
//   startIcon?:React.ReactNode,
//   endIcon?:React.ReactNode,
//   className?:string,
 
// }

const Buttons = ({children,...rest}:ButtonProps) => {
  const classes= customStyles();
  return (
    <Button
    {...rest}
    >
      {children}
    </Button>
  )
}

export default Buttons
