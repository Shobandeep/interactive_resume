import React, { useEffect } from "react";
import './about.scss';

import ScrollReveal from 'scrollreveal';

const scrollReveal = new ScrollReveal();

const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
})

export default function Home() {

  const ref = React.useRef(null);
  const ref2 = React.useRef(null);


  React.useEffect(() => scrollReveal.reveal(ref.current, srConfig()) ,[]);
  React.useEffect(() => scrollReveal.reveal(ref2.current, srConfig()) ,[]);


  return (
    <div id="about" class="about" ref={ref}>

        <div class="about-title slide-in-left" >My journey</div>

        <div class="about-body" ref={ref2}>

          <div class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies dolor eu scelerisque tempor. Pellentesque mauris massa, ultrices vel vulputate at, 
            egestas id enim. Phasellus eu est eget nisl tempus dignissim vitae ut magna. Integer ullamcorper pretium faucibus. Aenean rhoncus urna ac consectetur vestibulum. 
            Fusce imperdiet condimentum purus eget suscipit. Donec est nisi, dapibus tempor nibh id, sollicitudin cursus lectus. Sed odio eros, consequat quis vulputate non, 
            rutrum nec eros. Etiam eget sem metus. Nam volutpat diam et mollis mattis. Sed pellentesque vulputate dolor sit amet porttitor. Ut ultricies lectus ut velit tincidunt, a auctor ligula elementum.
          </div>

          <img class="body-img" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"  alt="an image of me!" />
        </div>
        
    </div>
  )
};
