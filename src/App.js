import React from "react";
import "./App.css"; // Global and App-specific styles
import ContactForm from "./components/ContactForm";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import PsychometricAssessmentSection from "./components/PsychometricAssessmentSection";
import Packages from "./components/Packages"; // UPDATED: Import Packages component
import WriteUp from "./components/WriteUp";
import logo from "./images/ocean.webp"; // Main backdrop image

/**
 * App component serves as the main layout and entry point for the application.
 * It orchestrates the rendering of various sections of the website.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Main backdrop image section */}
      <div className="backdrop">
        <img
          src={logo}
          className="backdrop-img"
          alt="Ocean backdrop representing calmness and mental well-being"
          width={1933} // Explicit width for image optimization
          height={1288} // Explicit height for image optimization
        />
      </div>
      <WriteUp />
      <Details />
      {/* <PsychometricAssessmentSection /> */}
      <Packages /> {/* UPDATED: Render Packages component here */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
