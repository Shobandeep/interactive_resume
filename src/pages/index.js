import React from "react";

import './global.scss';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
import Footer from '../components/footer/footer';


export default function Home() {
  return (
    <html lang="en">

      <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
          <link rel="stylesheet" href="styles.css"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet"/> 
          <title>Hire this guy</title>
      </head>

      <body>
        <Header />
        <Intro />
        <Intro />

      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  )
};
