import React from 'react'


interface FocusUnderLineProps{
    color: string
}

const FocusUnderLine = (props:FocusUnderLineProps) => {
  return (
    <hr
        style={{width : '304px',  height: '0',border: '2px solid', borderColor:`${props.color}`}}
    >
    </hr>
  )
}

export default FocusUnderLine
