import './App.css';
import Details from './components/Details.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import WriteUp from './components/WriteUp.js';
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
