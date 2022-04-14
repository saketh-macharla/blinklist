import React from 'react'
import { Avatar } from '@mui/material';

interface AvatarProps{
    children:React.ReactNode
}
const index = (props:AvatarProps) => {
  return (
    <Avatar sx={{width:'40px', height:'40px',bgcolor:'#69A6E3'}}>
        {props.children}
    </Avatar>
  )
}

export default index
