import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <div className=" pt-16">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer/>
      </div>
    </div>
  );
}

export default App;
