import React from "react";

//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Terstemonials from "./components/Terstemonials";

//CSS
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Terstemonials />
      <Footer />
    </>
  );
}

export default App;
