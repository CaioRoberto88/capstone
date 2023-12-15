import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Terstemonials from "./components/Terstemonials";
import About from "./components/About";

//CSS
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menu" element={<Main />} />
        <Route path="/terstemonials" element={<Terstemonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
