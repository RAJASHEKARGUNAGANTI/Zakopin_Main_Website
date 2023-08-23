import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Headder from './components/Headder/Headder';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ServicesPage from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Headder/>  
      <Contact/>  
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
