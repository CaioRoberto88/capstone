import React from "react";

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
      <Header />
      <Main />
      <Terstemonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
