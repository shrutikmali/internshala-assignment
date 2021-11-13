import React from 'react';
import FloatingTile from './FloatingTile/FloatingTile';
import { BsPlayFill, BsCalendar4, BsEnvelope, BsFillPersonFill } from 'react-icons/bs';
import './section.css';

const Section = () => {
  return (
    <div className='section'>
      <div className='sectionLeft'>
        <div className='sectionLeftHeader'>
          <p><span style={{color: 'orange'}}>Studying</span> Online is now <br />much easier</p>
        </div>
        <div className='sectionLeftSubtitle'>
          <p>Skilline is an interesting platform that will teach <br />you in a more interactive way</p>
        </div>
        <div className='sectionLeftFooter'>
          <button className='sectionLeftFooterJoinBtn'>Join for Free</button>
          <div className='sectionLeftFooterPlayBtn'><BsPlayFill fill='rgb(59, 194, 252)'/></div>
          <span>Watch how it works</span>
        </div>
      </div>
      <div className='sectionRight'>
        <FloatingTile 
        image={<BsCalendar4 fill='white'/>} 
        imgColour='rgb(5, 168, 247)' 
        heading='Attempt livetests' 
        subtitle={['and track your preparation']} />
        <div style={{alignSelf: 'flex-end'}}><FloatingTile
        image={<BsEnvelope fill='white'/>} 
        imgColour='rgb(255, 152, 0)' 
        heading='Study Fast' 
        subtitle={['Get hands on', 'our crash courses']} /></div>
        <FloatingTile 
        image={<BsFillPersonFill fill='white'/>} 
        imgColour='rgb(30, 113, 205)' 
        heading='100k' 
        subtitle={['Already enrolled with us!']} 
        btnText='Join Now' 
        btnColour='rbg(237, 26, 97)' />
      </div>
    </div>
  )
}

export default Section;