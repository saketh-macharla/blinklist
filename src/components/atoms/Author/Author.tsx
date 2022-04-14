import { Typography } from '@mui/material'
import React from 'react'

export interface AuthorProps{
  children:React.ReactNode;
}

const Author = (props: AuthorProps) => {
  return (
    <Typography variant='body1' sx={{fontWeight: 500, color:'#6D787E'}}>
        {props.children}
    </Typography>
  )
}

export default Author
