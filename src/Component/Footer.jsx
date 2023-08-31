import React from 'react'

const Footer = ({onNewGameClicked,suggestMove}) => {
  return (
  
    <div className='panel footer'>
      <button onClick={onNewGameClicked}>New Game</button>
      <button onClick={suggestMove} >Suggest</button>

    </div>
   
  )
}

export default Footer