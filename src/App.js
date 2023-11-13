import React from "react";
import './App.css';
import ContactForm from './components/ContactForm';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WriteUp from './components/WriteUp';
import logo from './images/ocean.webp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='backdrop'>
        <img src={logo} className="backdrop-img" alt="Ocean backdrop" width={1933} height={1288}/>
      </div>
      <WriteUp />
      <Details />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
