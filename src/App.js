import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import ContectUs from './Components/ContectUs/ContectUs'
import Services from './Components/Services/Services'
import { Route , Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
        <div className="App">
          <Navbar />
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contectus" element={<ContectUs />} />
          </Routes>
          <Footer />
        </div>
  );
}

export default App;
