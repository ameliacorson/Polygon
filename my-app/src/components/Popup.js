import React from 'react'

function Popup(props) {
  return (
    <div className='popup'>
        <div className='popup-container'>
        <button onClick={props.closePopup}> x </button>
        <h1>{props.name}</h1>
        </div>
       
    </div>
  )
}

export default Popup