import React from "react";

import './global.scss';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
import About from '../components/about/about';
import Footer from '../components/footer/footer';


export default function Home() {
  return (
    <React.Fragment>

        <Header />
        <Intro />
        <About />

        <Footer />

    </React.Fragment>
  )
};
