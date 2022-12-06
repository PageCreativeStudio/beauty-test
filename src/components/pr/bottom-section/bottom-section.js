import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import gsap, { Power3 } from 'gsap';

import ImagePopup from '../../image-popup/image-popup';
import Quote from '../../quote/quote';

const BottomSection = ({loaded, scroller, image1, image2, image3, image4, image5, image6, image7, image8}) => {
  let imageRef1 = useRef(null);
  let imageRef2 = useRef(null);
  let imageRef3 = useRef(null);
  let imageRef4 = useRef(null);
  let imageRef5 = useRef(null);
  let imageRef6 = useRef(null);
  let imageRef7 = useRef(null);
  let imageRef8 = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(imageRef1 && imageRef2 && loaded) { 
      
      let hoverInElements = [imageRef1.current, imageRef2.current, textRef.current]
      hoverInElements.forEach(el => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          x: 0, 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: Power3.ease,
        })
      })

      if (scroller) {

        if(width > 767) {
          // SCROLL MAGIC!!!
          gsap.to(imageRef1.current, {
            scrollTrigger: {
              trigger: imageRef1.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            y: 100 / 1920 * scroller.containerEl.clientWidth, 
            scale: 1.1,
          })
          gsap.to(imageRef2.current, {
            scrollTrigger: {
              trigger: imageRef2.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            x: 100 / 1920 * scroller.containerEl.clientWidth, 
          })
          gsap.to(textRef.current, {
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 105%',
              end: 'bottom -116%',
              scrub: true,
            },
            y: 220 / 1920 * scroller.containerEl.clientWidth, 
          })
          gsap.to(imageRef3.current, {
            scrollTrigger: {
              trigger: imageRef3.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -100 / 1920 * scroller.containerEl.clientWidth, 
            x: 200 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef4.current, {
            scrollTrigger: {
              trigger: imageRef4.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -200 / 1920 * scroller.containerEl.clientWidth, 
            x: 100 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef5.current, {
            scrollTrigger: {
              trigger: imageRef5.current,
              start: 'top 105%',
              end: 'bottom -102%',
              scrub: true,
            },
            y: 40 / 1920 * scroller.containerEl.clientWidth, 
            x: -100 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef6.current, {
            scrollTrigger: {
              trigger: imageRef6.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -150 / 1920 * scroller.containerEl.clientWidth, 
            x:  -150 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef7.current, {
            scrollTrigger: {
              trigger: imageRef7.current,
              start: 'top 105%',
              end: 'bottom -108%',
              scrub: true,
            },
            y: 150 / 1920 * scroller.containerEl.clientWidth, 
            x:  180 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef8.current, {
            scrollTrigger: {
              trigger: imageRef8.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -150 / 1920 * scroller.containerEl.clientWidth, 
            x:  180 / 1920 * scroller.containerEl.clientWidth
          })
        } 
      }
    }

    
  }, [loaded, scroller]);  

  return (
    <section>
      <div className="">
        <div className="max-w-screen-2xl mx-auto px-8 xl:px-32">
          <div className="flex flex-wrap md:mb-48 lg:mb-64 md:-ml-56">
            <div className="w-full md:w-1/2 md:pr-10 lg:pr-24">
              <div className="">
                <div ref={imageRef1} className="opacity-0">
                  <ImagePopup image={image1} />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="md:max-w-xs lg:max-w-sm mx-auto">
                <div ref={imageRef2} className="opacity-0">
                  <ImagePopup className="mb-10" image={image2} />
                </div>
              </div>
              <div ref={textRef} className="opacity-0 mb-10 md:mb-0">
                <Quote 
                  text="“ Page are my go to guys for all things creative. No matter what
                  I task them with, they’re able to work collaboratively with me
                  to bring the vision to life and go beyond how good I thought
                  it could even be! I’ll forever be trusting them with everything
                  from creative mailers, bespoke boxes and crazy props for
                  events – I couldn’t recommend them highly enough! ”"
                  name="Amelia Parkes"
                  company="Kilpatrick"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-w-screen-2xl mx-auto justify-between md:mb-24 px-8 xl:px-32">
          <div className="w-full md:w-1/2 xl:w-full md:max-w-sm xl:max-w-lg">
            <div ref={imageRef3}>
              <ImagePopup className="mb-10" image={image3} />
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-full md:max-w-xs xl:max-w-md lg:-mr-20 xl:-mr-32">
            <div ref={imageRef4}>
              <ImagePopup className="mb-10" image={image4} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between md:mb-24 px-8 xl:px-32">
          <div className="w-full md:w-1/2 xl:w-full md:max-w-sm xl:max-w-lg">
            <div ref={imageRef5}>
              <ImagePopup className="mb-10" image={image5} />
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-full md:max-w-sm xl:max-w-lg">
            <div ref={imageRef6}>
              <ImagePopup className="mb-10" image={image6} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-no-wrap max-w-screen-2xl mx-auto justify-between px-8 xl:px-32">
          <div className="w-full md:w-1/2 lg:w-full md:max-w-xs xl:max-w-sm z-10 relative">
            <div ref={imageRef7}>
              <ImagePopup className="mb-10" image={image7} />
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-full md:max-w-md xl:max-w-xl xl:max-w-3xl">
            <div ref={imageRef8}>
              <ImagePopup className="mb-10 md:mb-0" image={image8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
BottomSection.propTypes = {
  loaded: PropTypes.bool,
  scroller: PropTypes.object,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  image6: PropTypes.string,
  image7: PropTypes.string,
  image8: PropTypes.string,
};

export default BottomSection;