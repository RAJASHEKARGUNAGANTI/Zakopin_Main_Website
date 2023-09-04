import './App.css';
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {Switch} from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Headder from './components/Headder/Headder';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Story from './components/Story/Story';
import Spinner from './components/Particles/spinner';
// import Test from './components/Test/Test';
import ParticlesBG from './components/Particles/ParticlesBG';
// import AtomicSpinner from 'atomic-spinner'
import SmallNav from './components/SmallNav/SmallNav';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading your content here
    setTimeout(() => {
      setLoading(false); // Set loading to false when your content is ready
    }, 2000); // Simulated 2-second loading time
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Spinner /> // Display the AtomicSpinner component while loading
      ) : (
        /* Your website content goes here when loading is complete */
        <div>
          <Navbar />
          <Headder />
          <Story />
          <Contact />
          <Testimonials />
          <Footer />
          <SmallNav/>
          <ParticlesBG/>
        </div>
      )}
    </div>
  );
}

export default App;
