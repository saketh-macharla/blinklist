import { Typography } from '@mui/material'
import React from 'react'

export interface BookTitleProps{
    children:React.ReactNode
}

const BookTitle = (props:BookTitleProps) => {
  return (
    <Typography variant='subtitle1' sx={{fontWeight: 700, color:'#03314B'}}>
        {props.children}
    </Typography>
  )
}

export default BookTitle
