import React from 'react';
import NavBar from './NavBar/NavBar';
import Section from './Section/Section';
import Footer from './Footer/Footer';
import './index.css';
import Student from './student2.png';

const App = () => {
  return (
    <>
      <div className='background'>
        <img src={Student} width={300} className='bgImage'/>
      </div>
      <NavBar />
      <Section />
      <Footer />
    </>
  )
}

export default App;