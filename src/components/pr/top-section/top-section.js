import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import gsap, { Power3 } from 'gsap';

import ImagePopup from '../../image-popup/image-popup';
import Quote from '../../quote/quote';

const TopSection = ({loaded, scroller, image1, image2, image3, image4}) => {
  let imageRef1 = useRef(null);
  let imageRef2 = useRef(null);
  let imageRef3 = useRef(null);
  let imageRef4 = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(imageRef1 && imageRef2 && imageRef3 && imageRef4 && loaded) { 
      
      let hoverInElements = [imageRef1.current, imageRef2.current, imageRef3.current]
      hoverInElements.forEach(el => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
          opacity: 1, 
          duration: 1.2, 
          ease: Power3.ease,
        })
      })

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger:  textRef.current,
          start: 'top 90%',
        },
        x: 0,
        opacity: 1, 
        duration: 1.2, 
        ease: Power3.easeOut,
      })


      if (scroller) {
        if (width > 767) {
          // SCROLL MAGIC!!!
          gsap.to(imageRef1.current, {
            scrollTrigger: {
              trigger: imageRef1.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            y: 100 / 1920 * scroller.containerEl.clientWidth, 
            scale: 1.2,
          })
          gsap.to(imageRef2.current, {
            scrollTrigger: {
              trigger: imageRef2.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -200 / 1920 * scroller.containerEl.clientWidth, 
            x: 100 / 1920 * scroller.containerEl.clientWidth, 
          })
          gsap.to(textRef.current, {
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 105%',
              end: 'bottom -115%',
              scrub: true,
            },
            y: width > 1100 ? 200 / 1920 * scroller.containerEl.clientWidth : 0, 
          })
          gsap.to(imageRef3.current, {
            scrollTrigger: {
              trigger: imageRef3.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            y: 100 / 1920 * scroller.containerEl.clientWidth, 
            x: 100 / 1920 * scroller.containerEl.clientWidth, 
          })
          gsap.to(imageRef4.current, {
            scrollTrigger: {
              trigger: imageRef4.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            x: -350 / 1920 * scroller.containerEl.clientWidth, 
          })
        }
      }
    }

    
  }, [loaded, scroller]);  

  return (
    <section className="mb-10 md:mb-24 lg:mb-32">
      <div className="mx-auto px-8 xl:px-32 flex flex-wrap">
        <div className="w-full md:w-2/3 lg:mt-16 md:pr-16">
          <div className="md:-ml-64 overflow-hidden lg:mr-20">
            <div ref={imageRef1} className="opacity-0">
              <img className="w-full" src={image1} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:-mt-24 md:mt-0 md:-mt-16 lg-mt-32">
          <div className="">
            <div ref={imageRef2} className="opacity-0">
              <ImagePopup className="" image={image2} />
            </div>
          </div>
          <div className="">
            <div ref={imageRef3} className="opacity-0">
              <ImagePopup image={image3} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 xl:px-32 flex flex-wrap md:flex-no-wrap justify-between mt-10 md:mt-24 md:mt-8 xl:mt-8">
        <div ref={textRef} className="w-full md:w-auto fade md:max-w-lg opacity-0 fade__text--left relative z-10">
          <Quote 
            text="“Page is our go-to agency for PR
            materials – the team has always
            provided an exceptional service, going
            above and beyond to ensure every
            detail is correct and deadlines are
            met. They’ve never let us down and we
            couldn’t recommend them enough!”"
            name="PR Team"
            company="bareMinerals + Buxom"
          />
        </div>
        <div className="w-full md:w-auto block md:hidden lg:block md:ml-40 md:ml-20 md:ml-48 lg:ml-24 mt-10 md:mt-24 lg:mt-48">
          <div ref={imageRef4} className="w-full md:max-w-lg">
            <img src={image4} />
          </div>
        </div>
      </div>
    </section>
  );
}
TopSection.propTypes = {
  loaded: PropTypes.bool,
  scroller: PropTypes.object,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4:  PropTypes.string
};

export default TopSection;