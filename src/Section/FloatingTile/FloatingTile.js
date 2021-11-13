import React from 'react';
import './floatingTile.css';

const FloatingTile = ({ image, heading, imgColour, subtitle, btnText, btnColour}) => {
  return (
    <div className='floatingTile'>
      <div style={{display: 'flex'}}>
        <div className='floatingTileImg' style={{backgroundColor: imgColour}}>
          {image}
        </div>
        <div className='floatingTileTxt'>
          <div className='floatingTileHeading'>
            <p>
              {heading}
            </p>
          </div>
          <div className='floatingTileSubtitle'>
            <p>
              {subtitle.map(txt => (
                <span key={Math.random()}>{txt}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      {btnText && <div>
        <button className='floatingTileJoinBtn'>{btnText}</button>
      </div>}
    </div>
  )
}

export default FloatingTile;