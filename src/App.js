import React from "react";

//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Terstemonials from "./components/Terstemonials";
import About from "./components/About";
import Menu from "./components/Menu";

//CSS
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Menu />
      <Terstemonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
