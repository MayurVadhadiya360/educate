import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Pricetable from './components/Pricetable';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar /><br />
      <Section1/>
      <Section2/>
      <Section3/>
      <Pricetable />
      <Testimonials />
      {/* </Router> */}
    </>
  );
}

export default App;
