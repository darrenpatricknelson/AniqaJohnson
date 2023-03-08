import './App.css';
import Details from './components/Details.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import WriteUp from './components/WriteUp.js';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Header />
      </div>
      <div className='backdrop'>
        <p> background image will go here </p>
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
