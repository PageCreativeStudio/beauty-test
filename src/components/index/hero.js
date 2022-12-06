import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import {TweenMax, TimelineLite ,TimelineMax, Power3, Power1, Back, Power2} from 'gsap';
import BackgroundImage from 'gatsby-background-image';


import arrow from '../../images/svgs/arrow-white.svg'

import './hero.style.scss'

const Hero = ({ scroller, scrollerReady, images}) => {

  // Setup our Dom Refs to target in returned JSX
  let hero = useRef(null);
  let upperText = useRef(null);
  let middleText = useRef(null);
  let button = useRef(null);
  let arrowIcon = useRef(null);
  let overlayLeft = useRef(null);
  let overlayRight = useRef(null);
  let bgImage = useRef(null);
  let textWrapper = useRef(null);

  // track scroll for fade out animations
  let [slideCount, setSlideCount] = useState(0)
    const handler = useCallback((e) => {
    e.preventDefault();
  }, []);

  let tl = new TimelineLite();

  useEffect(() => {
      // Render animations //
      // Title vars
      hero.current.addEventListener('wheel', handler, false);
      
      TweenMax.to(hero.current, 0, {css: {visibility: 'visible'}});


      // Animate Text
      tl.fromTo(bgImage.current, {scale: 1.4, rotate: 8, opacity: 0}, {scale: 1,rotate: 0, opacity: 1, duration: 2, delay: -0.5, ease: Power3.easeInOut}, 'slide' )
      tl.fromTo([upperText, middleText, button], {y: 130, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, delay: -.6, ease: Power3.easeInOut }, 'slide' )
      // Animate Image
      tl.to(overlayLeft.current, {right: '100%', duration: 1, delay: -0.2, ease: Power1.easeInOut} , 'slide')
        .to(overlayRight.current, {left: '100%', duration: 1, delay: -0.2, ease: Power1.easeInOut, onComplete: () => {
          hero.current.removeEventListener('wheel', handler, false);
          Array.from(document.querySelectorAll('.homeintro__text-wrapper')).forEach(el => {
            el.style = 'overflow: initial;'
          })
        }} , 'slide');

      /* PARALLAX EFFECT */
      if (scroller) {
        var sceneStart = 0;
        var duration = 2000;

        var requestId = null;

        // SCROLL MAGIC!!!
        var tl2 = new TimelineMax({ paused: true })
          .to(bgImage.current, duration, { scale: 1.2, rotate:10, y: 300, ease: Power1.ease }, sceneStart)
          .to(upperText, duration, { y: -300, ease: Back.ease}, sceneStart)
          .to(middleText, duration, { y: -400, ease: Back.ease }, sceneStart + 200)
          .to(button, duration, { y: -450, ease: Back.ease }, sceneStart + 400)
          .to(arrowIcon, duration, { y: -450, ease: Back.ease }, sceneStart + 600 )


        scroller.addListener(({offset}) => {
          if(!requestId) requestAnimationFrame(() => { update(offset.y); });
        });
        

        // Set timeline time to scrollTop
        const update = (y) => {
            tl2.time(y);
            requestId = null;
        }

        update();
      }
  }, [scrollerReady]);  


  useEffect(() => {
      const intervalId = setInterval(() => {
        setSlideCount((prevCount) => {
          if (images.length - 1 === prevCount) {
            bgImage.current.children[prevCount].classList.add('opacity-0')
            return 0
          }
          bgImage.current.children[prevCount].classList.add('opacity-0')
          return prevCount + 1
        })      
      }, 2000)
      return () => clearInterval(intervalId)
  }, [])

  if(bgImage.current) bgImage.current.children[slideCount].classList.remove('opacity-0')

  const scrollDownServices = () => {
    scroller.scrollTo(0, document.querySelector('.services').offsetTop, 2000, {
      easing:  Power2.easeInOut,
    })
  }

  const scrollDownIntro = () => {
    scroller.scrollTo(0, document.querySelector('.aboutIntro__title').offsetTop, 1200, {
      easing:  Power2.easeInOut,
    })
  }

  return (
    <section ref={hero} className={`homeintro  homeintro__loaded  flex flex-wrap justify-start items-center h-screen relative`}>
      <div ref={bgImage} className="homeintro__image absolute w-full h-full select-none">
        {images && images.map((image, i) =>
          <div key={i} className="inset-0 absolute w-full h-full opacity-0 duration-300 select-none">
            <BackgroundImage 
              tag="div"
              fluid={image}
              className="bg-cover bg-center bg-no-repeat w-full h-full"
            />
          </div>
        )}
      </div>
      <div ref={textWrapper} className="-mt-8 text-left leading-none relative z-20 px-8 md:px-16 lg:px-20 xl:px-24">
        <div className="mb-5 md:mb-10">
          <h2 className="text-fixed-2xl md:text-7xl 2xl:text-max-8xl homeintro__text-wrapper mb-0 md:mb-6 serif-font-regular"><span  ref={el => upperText = el} className="homeintro__text opacity-0  text-white">We are Page Beauty.</span></h2>
          <h2 className="text-fixed-2xl md:text-7xl  2xl:text-max-8xl serif-font-regular">
          <span ref={el => middleText = el} className="homeintro__text opacity-0  text-white">Creators of beautiful solutions.</span>
          </h2>
        </div>
        <div ref={el => button = el} className="opacity-0 px-2">
          <div onClick={scrollDownServices} className="homeintro__button cursor-pointer text-white absolute text-base lg:text-xl 2xl:text-max-xl tracking-widest border border-solid border-white p-5 duration-300 hover:bg-black hover:border-black hover:text-white">EXPLORE OUR SERVICES</div>
        </div>
      </div>
      <div ref={el => arrowIcon = el} onClick={scrollDownIntro} className="px-8 md:px-16 lg:px-20 xl:px-24 absolute bottom-0 left-0 mb-10 cursor-pointer">
        <img src={arrow} className="w-5" alt="arrow" />
      </div>
      <div ref={overlayLeft} className="bg-white homeintro__overlay--left" />
      <div ref={overlayRight}  className="bg-white homeintro__overlay--right" />
    </section>
  )
}

Hero.propTypes = {
  scroller: PropTypes.object,
  scrollerReady: PropTypes.bool,
  images: PropTypes.array
};

export default Hero;
