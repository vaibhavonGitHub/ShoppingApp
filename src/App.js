import './App.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Beauty from "./components/Pages/Beauty";
import Appliances from "./components/Pages/Appliances";
import Smartphones from "./components/Pages/Smartphones";
import Books from "./components/Pages/Books";
import Electronics from "./components/Pages/Electronics";
import Footwears from "./components/Pages/Footwears";
import Groceries from "./components/Pages/Groceries";
import Homedecor from "./components/Pages/Homedecor";
import Kids from "./components/Pages/Kids";
import Mensfashion from "./components/Pages/Mensfashion";
import Womensfashion from "./components/Pages/Womensfashion";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import React from "react";


function App() {
  return (
    <>
    
   <Router>
   <Header/>
    <Routes>
<Route path="/" element={<Slider/>}/>
<Route path="/appliances" element={<Appliances/>}/>
<Route path="/beauty" element={<Beauty/>}/>
<Route path="/smartphones" element={<Smartphones/>}/>
<Route path="/books" element={<Books/>}/>
<Route path="/electronics" element={<Electronics/>}/>
<Route path="/footwears" element={<Footwears/>}/>
<Route path="/groceries" element={<Groceries/>}/>
<Route path="/homedecor" element={<Homedecor/>}/>
<Route path="/kids" element={<Kids/>}/>
<Route path="/mensfashion" element={<Mensfashion/>}/>
<Route path="/womensfashion" element={<Womensfashion/>}/>

    </Routes>
    <Footer/>
   </Router>
  
  </>
  );
}

export default App;
