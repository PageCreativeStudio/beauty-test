import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import gsap, {Power3 } from 'gsap';

import ImagePopup from '../../image-popup/image-popup';
import Quote from '../../quote/quote';

const FloatingImages = ({loaded, scroller, image1, image2, image3, image4, image5, image6, image7, image8}) => {
  let imageRef1 = useRef(null);
  let imageRef1Wrapper = useRef(null);
  let imageRef2 = useRef(null);
  let imageRef3 = useRef(null);
  let imageRef4 = useRef(null);
  let imageRef5 = useRef(null);
  let imageRef6 = useRef(null);
  let imageRef7 = useRef(null);
  let imageRef8 = useRef(null);
  let textRef = useRef(null);
  let textRef2 = useRef(null);

  useEffect(() => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(imageRef1 && imageRef2 && imageRef3 && imageRef4 && loaded) { 
      
      let hoverInElements = [imageRef1.current, imageRef2.current]
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
        // SCROLL MAGIC!!!
        if (width > 767) {
          gsap.to(imageRef1.current, {
            scrollTrigger: {
              trigger: imageRef1.current,
              start: 'top 105%',
              end: 'bottom -115%',
              scrub: true,
            },
            y: -200 / 1920 * scroller.containerEl.clientWidth, 
            scale: 1.1,
          })
          gsap.to(imageRef1Wrapper.current, {
            scrollTrigger: {
              trigger: imageRef1Wrapper.current,
              start: 'top 105%',
              end: 'bottom -125%',
              scrub: true,
            },
            y: -100 / 1920 * scroller.containerEl.clientWidth, 
            x: -100 / 1920 * scroller.containerEl.clientWidth,
          })
          gsap.to(imageRef2.current, {
            scrollTrigger: {
              trigger: imageRef2.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            y: -100 / 1920 * scroller.containerEl.clientWidth, 
            x: 100 / 1920 * scroller.containerEl.clientWidth, 
          })
          gsap.to(imageRef3.current, {
            scrollTrigger: {
              trigger: imageRef3.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            y: -250 / 1920 * scroller.containerEl.clientWidth, 
            x: -100 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef4.current, {
            scrollTrigger: {
              trigger: imageRef4.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -300 / 1920 * scroller.containerEl.clientWidth, 
            x: -100 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef5.current, {
            scrollTrigger: {
              trigger: imageRef5.current,
              start: 'top 105%',
              end: 'bottom -120%',
              scrub: true,
            },
            y: 180 / 1920 * scroller.containerEl.clientWidth, 
            x: 280 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(textRef2.current, {
            scrollTrigger: {
              trigger: textRef2.current,
              start: 'top 105%',
              end: 'bottom -125%',
              scrub: true,
            },
            y: width > 1024 ? 250 / 1920 * scroller.containerEl.clientWidth : 100 / 1920 * scroller.containerEl.clientWidth, 
          })
          gsap.to(imageRef6.current, {
            scrollTrigger: {
              trigger: imageRef6.current,
              start: 'top 105%',
              end: 'bottom -105%',
              scrub: true,
            },
            y: -50 / 1920 * scroller.containerEl.clientWidth, 
            x: 200 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef7.current, {
            scrollTrigger: {
              trigger: imageRef7.current,
              start: 'top 105%',
              end: 'bottom -125%',
              scrub: true,
            },
            x: 500 / 1920 * scroller.containerEl.clientWidth,
            y: 300 / 1920 * scroller.containerEl.clientWidth
          })
          gsap.to(imageRef8.current, {
            scrollTrigger: {
              trigger: imageRef8.current,
              start: 'top 105%',
              end: 'bottom top',
              scrub: true,
            },
            y: -150 / 1920 * scroller.containerEl.clientWidth,
            x: -150 / 1920 * scroller.containerEl.clientWidth
          })
        } 
      }
    }

    
  }, [loaded, scroller]);  

  return (
    <section className="mb-10 md:mb-0">
      <div className="mx-auto px-8 xl:pl-24 flex flex-wrap md:-mb-32 xl:-mb-56 2xl:-mb-64">
        <div className="w-full md:w-1/2 xl:w-3/5 lg:pr-8 lg:-mr-16">
          <div ref={imageRef1Wrapper} className="overflow-hidden max-w-4xl ml-auto">
            <div ref={imageRef1} className="opacity-0">
              <ImagePopup image={image1} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/5 md:-mt-32">
          <div className="lg:-mr-64">
            <div ref={imageRef2} className="opacity-0">
              <ImagePopup className="mb-10 md:mb-0 md:max-w-md md:ml-40 xl:ml-0 xl:max-w-xl 2xl:ml-auto" image={image4} />
            </div>
          </div>
          <div className="lg:pl-20 xl:pl-32 lg:-mr-12 mb-10 lg:mb-0 md:pt-10">
            <div ref={textRef} className="fade md:max-w-lg opacity-0 fade__text--left relative z-10">
                <Quote 
                    text="“ The team at Page are amazing, I have
                    worked with them for the last 4/5
                    years and have never looked back - the
                    service you get is incredible, nothing is
                    ever to much and they go out their way
                    to make deadlines work for you. They
                    exceed expectations every time ”"
                    name="Tasha Harris"
                    company="The Fragrance Shop"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-8 xl:px-32 flex flex-wrap items-end md:pt-16">
        <div className="w-full md:w-2/3">
          <div className="lg:ml-12 lg:ml-32 lg:-mt-64 xl-mt-24 mb-5 md:mb-0">
            <div ref={imageRef4} className="md:max-w-sm lg:max-w-xl ml-auto z-10 relative">
              <ImagePopup  image={image2} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <div ref={imageRef3} className="lg:ml-64 mt-10 lg:-mr-12 lg:-mr-64 md:max-w-sm">
              <div className="md:-mr-16 md:ml-24  lg:-mr-16 lg:ml-16  2xl:-mr-24 2xl:ml-32">
                <ImagePopup image={image3} />
              </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 xl:px-32 flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-10 md:mb-0">
            <div ref={textRef2} className="md:max-w-md md:-mt-32">
                <Quote 
                    text="“ Over the years, Page has become
                    a key supplier for our brand in the
                    production of our beauty trade tools.
                    Always making their best to meet
                    tight deadlines and urgent demands,
                    we rely on Page for most of our
                    productions and trust their expertise.
                    Thank you for your dedicated work
                    and ability to understand our needs. ”"
                    name="Léa Teboul"
                    company="Guerlain"
                />
            </div>
        </div>
        <div ref={imageRef5} className="w-full md:w-1/2 lg:w-2/3 lg:pl-16 md:-mt-24 md:max-w-xl lg:max-w-3xl">
            <ImagePopup image={image5} />
        </div>
      </div>
      <div className="mx-auto px-8 xl:px-32 flex max-w-screen-2xl mx-auto  flex-wrap md:flex-nowrap justify-between">
        <div className="mb-10 md:mb-0 md:-ml-20 xl:-ml-56 max-w-full">
            <div style={{width: '512px'}} ref={imageRef6} className="md:max-w-xs lg:max-w-sm xl:max-w-lg max-w-full">
                <ImagePopup image={image6} />
            </div>
        </div>
        <div ref={imageRef7} className="mb-10 md:mb-0 w-full md:w-1/2 lg:w-2/3 md:max-w-sm lg:max-w-2xl md:mt-32 2xl:mr-32">
            <ImagePopup image={image7} />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 xl:px-32">
        <div ref={imageRef8} className="md:max-w-sm lg:max-w-lg md:-mt-24">
          <ImagePopup image={image8} />
        </div>
      </div>
    </section>
  );
}
FloatingImages.propTypes = {
  loaded: PropTypes.bool,
  scroller: PropTypes.object,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4:  PropTypes.string,
  image5: PropTypes.string,
  image6: PropTypes.string,
  image7: PropTypes.string,
  image8: PropTypes.string,
};

export default FloatingImages;