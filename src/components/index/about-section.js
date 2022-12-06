import React, { useRef, useEffect } from "react";
import Image from 'gatsby-image';

import {animateUp} from '../../animations';

import './about-section.style.scss';

const AboutSection = ({loaded, introText, title, quote, image, logo, by}) => {

  // Setup our Dom Refs to target in returned JSX
  let titleRef = useRef(null);
  let quoteRef = useRef(null);
  let introRef = useRef(null);

  // Animate in text
  useEffect(() => {
    if (loaded) {
      animateUp(titleRef.current)
      animateUp(introRef.current)
      animateUp(quoteRef.current)
    }
  }, [loaded])

  return (
    <section className="pt-16 md:pt-32 pb-16 md:pb-32 w-full px-8">
      {introText && <p className="aboutIntro__title leading-relaxed mb-8 md:mb-12 xl:mb-24 text-center text-base md:text-4xl 2xl:text-max-3xl max-w-screen-xl mx-auto" ref={introRef}>
        {introText}
      </p>}
      <div className="max-w-6xl mx-auto">
        {title && <h1 className="aboutIntro__title text-fixed-2xl md:text-9xl lg:text-8xl 2xl:text-max-8xl leading-none mb-8 md:mb-12 xl:mb-24 text-center" ref={titleRef}>
          {title}
        </h1>}
        <div className="ml-auto max-w-6xl md:flex md:items-center" ref={quoteRef}>
          <div className="w-full md:w-1/3 lg:pr-10">
          <Image className="block mb-5 md:mb-0 w-full" fluid={image} />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 lg:pl-10">
            {quote && <div className="serif-font-thin text-xl md:text-5xl lg:text-4/5xl xl:text-4xl 2xl:text-max-4xl leading-relaxed mb-5 md:mb-10">
              {quote}
            </div>
            }
            {logo && <Image className="w-32 md:w-40 mb-2 md:mb-4" fixed={logo} />}
            {by && <span className="text-sm md:text-base">{by}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
