import React from "react";
import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WriteUp from './components/WriteUp';
import logo from './images/ocean.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='backdrop'>
        <img src={logo} className="backdrop-img" alt="Ocean backdrop" />
      </div>
      <WriteUp />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
