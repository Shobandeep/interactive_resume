import React from "react";

import './global.scss';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
import About from '../components/about/about';
import Footer from '../components/footer/footer';


export default function Home() {
  return (
    <React.Fragment>
      
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet" /> 
        <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />

        <Header />
        <Intro />
        <About />

        <Footer />

    </React.Fragment>
  )
};
