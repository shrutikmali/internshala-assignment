import React from 'react';
import './card.css';


const Card = ({ image, bgColour, title, subtitle}) => {
  return (
    <div className='cardContainer'>
      <div className='cardImage' style={{backgroundColor: bgColour}}>
        {image}
      </div>
      <div className='cardTitle'>{title}</div>
      <div className='cardSubtitle'>{subtitle.map(text => (
        <p key={Math.random()}>{text}</p>
      ))}</div>  
    </div>
  )
}

export default Card;