import './App.css';
import Details from './components/Details.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import WriteUp from './components/WriteUp.js';
import logo from './images/ocean.jpg';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Header />
      </div>
      <div className='backdrop'>
        <img src={logo} className="backdrop-img" alt="Ocean backdrop" />
      </div>
      <div className='write_up'>
        <WriteUp />

      </div>
      <div className='details'>
        <Details />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
