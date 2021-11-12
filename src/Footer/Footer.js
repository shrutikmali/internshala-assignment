import React from 'react';
import './footer.css';
import Card from './Card/Card';
import { BsFillCalendarFill } from "react-icons/bs";
import { BsCardText } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';



const Footer = () => {
  return (
    <div className='footerStyle'>
      <div className='footerHeading'>
        <p>
          <span style={{color: 'blue'}}>Helping Students </span>
          <span style={{color: 'orange'}}>Achieve Their Dream.</span>
        </p>
      </div>
      <div className='footerSubtitle'>
        <p>
          A journey of few IITians NITians that started with an aim to bring back the long lost meaning of 
          education to the real world tools <br /><br /> needed to run a successful school or office.
        </p>
      </div>
      <div className='footerCards'>
        <Card 
        image={<BsCardText fill='white' width='300px' height='300px' />}
        bgColour='blue' 
        title='Exams/Courses' 
        subtitle={["CBSE, ICSE, ISC", "JEE, BITSAT, NEET", "KVPY", "MHCET, WBJEE"]} />
        <Card 
        image={<BsFillCalendarFill fill='white' />}
        bgColour='orange' 
        title='Crash Courses' 
        subtitle={["Foundation (Class 6 - 10)", "CBSE, ICSE, ISC", "JEE, NEET", "KVPY Bootcamp"]} />
        <Card 
        image={<BsPeopleFill fill='white' />}
        bgColour='green' 
        title='Career Guidance' 
        subtitle={["Medical", "Engineering", "General Science", "Research Fields"]} />
      </div>
    </div>
  )
}

export default Footer;