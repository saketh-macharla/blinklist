import { Typography } from '@mui/material'
import React from 'react'

export interface TimerProps{
    children:React.ReactNode,
}
const Timer = (props:TimerProps) => {
  return (
    <Typography
    variant='caption'
    sx={{fontSize:'14px', lineHeight:'17.6px', color:'#6D787E'}}
    >
        {props.children}
    </Typography>
  )
}

export default Timer
