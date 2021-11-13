import React from 'react';
import NavBar from './NavBar/NavBar';
import Section from './Section/Section';
import Footer from './Footer/Footer';
import './index.css';

const App = () => {
  return (
    <>
      <div className='background'></div>
      <NavBar />
      <Section />
      <Footer />
    </>
  )
}

export default App;