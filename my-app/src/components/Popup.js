import React from 'react'

function Popup(props) {

  return (
    <div className='popup'>
        <div className='popup-container'>
        <button onClick={props.closePopup}> x </button>
        <h2> {props.item.name} </h2>
        <p>{props.item.price}</p>
        <p>{props.item.description}</p>
        </div>
       
    </div>
  )
}

export default Popup