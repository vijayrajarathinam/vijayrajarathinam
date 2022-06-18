import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ThingsIBuilt from "./components/ThingsIBuilt";
import Whatsnext from "./components/Whatsnext";
import "./App.css";

function App() {
  return [
    <Header />,
    <NavBar />,
    <About />,
    <ThingsIBuilt />,
    <Whatsnext />,
    // <Experience />,
    // <Services />,
    // <Portfolio />,
    // // <Testimonial />,
    // <Contact />,
    <Footer />,
  ];
}

export default App;
