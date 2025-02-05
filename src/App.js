import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Prescriptions from './components/Prescriptions';
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Sliders from './components/Sliders'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sliders />
      <Prescriptions />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
