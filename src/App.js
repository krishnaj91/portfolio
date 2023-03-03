import './App.css';
import React from 'react'
import Footer from './components/Footer/Footer';
import Router from './router/index';

function App() {
  return (
    <>
    <div className='main'>
      <Router/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
