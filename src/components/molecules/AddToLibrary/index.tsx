import React from 'react'
import Buttons from '../../atoms/Buttons/Buttons'
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { customStyles } from '../../../theme';
import CustomTypo from '../../atoms/CustomTypo';


const index = () => {
    const classes =customStyles();
  return (
    <>
    <Buttons variant='outlined' startIcon={<AddIcon/>} className={classes.addToLib}>
        
        <CustomTypo  variant='body2' component='div' children='Add to library'/>

    </Buttons> 
    </>
  )
}

export default index
