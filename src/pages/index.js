import React from "react";

import './global.scss';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
import About from '../components/about/about';


export default function Home() {
  return (
    <React.Fragment>
        <Header />
        <Intro />
        <About />
    </React.Fragment>
  )
};
