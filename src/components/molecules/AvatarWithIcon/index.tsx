import React from 'react'
import CustomAvatar from '../../atoms/Avatar/index';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { display } from '@mui/system';

const index = () => {
  return (
    <div style={{display:'flex' ,width:'62px', height:'40px', justifyContent: 'flex-start', alignItems: 'center',}}>
      <CustomAvatar children='A'/>
      <KeyboardArrowDownIcon sx={{color:'#042330',width:'20px', height:'20px',}}/>
    </div>
  )
}

export default index
