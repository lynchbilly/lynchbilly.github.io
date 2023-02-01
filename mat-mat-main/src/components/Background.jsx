import React from 'react'

import background1 from '../assets/AForest3.jpg'

const backgroundStyles = {
  zIndex: '-1',
  position: 'absolute',
    top: '50%', /* position the top  edge of the element at the middle of the parent */
    left: '50%', /* position the left edge of the element at the middle of the parent */
    transform: 'translate(-50%, -50%)',
  minWidth: '100%',
  minHeight: '100%',
  background: "url(" + background1 + ") center / cover"
}

const Background = () => {
  return (
    <div style={backgroundStyles} />
  )
}

export default Background
