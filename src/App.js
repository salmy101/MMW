import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
        <Hero />
        <About />
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
