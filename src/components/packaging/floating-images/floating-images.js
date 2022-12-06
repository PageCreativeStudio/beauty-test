import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import gsap, { Power3} from 'gsap';

import ImagePopup from '../../image-popup/image-popup';
import Quote from '../../quote/quote';

const FloatingImages = ({loaded, scroller, image1, image2, image3, image4, image5, image6, image7}) => {
  let imageRef1 = useRef(null);
  let imageRef2 = useRef(null);
  let firstQuoteRef = useRef(null);
  let imageRef3 = useRef(null);
  let imageRef4 = useRef(null);
  let imageRef5 = useRef(null);
  let imageRef6 = useRef(null);
  let textRef2 = useRef(null);
  let textRef3 = useRef(null);
  let butterflyRef = useRef(null);

  useEffect(() => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(imageRef1 && imageRef2 && imageRef3 && imageRef4 && loaded) { 
      
      let hoverInElements = [imageRef1.current, imageRef2.current, imageRef3.current, firstQuoteRef.current]
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

      if (scroller) {
        if (width > 767) {
          // SCROLL MAGIC!!!
            gsap.to(imageRef1.current, {
              scrollTrigger: {
                trigger: imageRef1.current,
                start: 'top 105%',
                end: 'bottom -15%',
                scrub: true,
              },
              y: 200, 
              scale: 1.1,
            })
            gsap.to(imageRef2.current, {
              scrollTrigger: {
                trigger: imageRef2.current,
                start: 'top 105%',
                end: 'bottom -5%',
                scrub: true,
              },
              x: 150 / 1920 * scroller.containerEl.clientWidth,
            })
            gsap.to(firstQuoteRef.current, {
              scrollTrigger: {
                trigger: firstQuoteRef.current,
                start: 'top 105%',
                end: 'bottom -250%',
                scrub: true,
              },
              y: 150 / 1920 * scroller.containerEl.clientWidth,  
              x: -150 / 1920 * scroller.containerEl.clientWidth,
            })
            gsap.to(imageRef3.current, {
              scrollTrigger: {
                trigger: imageRef3.current,
                start: 'top 105%',
                end: 'bottom -50%',
                scrub: true,
              },
              y: 200 / 1920 * scroller.containerEl.clientWidth,  
              x: -300 / 1920 * scroller.containerEl.clientWidth,
            })
            gsap.to(imageRef5.current, {
              scrollTrigger: {
                trigger: imageRef5.current,
                start: 'top 105%',
                end: 'bottom -20%',
                scrub: true,
              },
              y: -100 / 1920 * scroller.containerEl.clientWidth,  
            })
            gsap.to(butterflyRef.current, {
              scrollTrigger: {
                trigger: butterflyRef.current,
                start: 'top 105%',
                end: 'bottom top',
                scrub: true,
              },
              y: -100 / 1920 * scroller.containerEl.clientWidth,  
              x: -80 / 1920 * scroller.containerEl.clientWidth,  
            })
            gsap.to(textRef2.current, {
              scrollTrigger: {
                trigger: textRef2.current,
                start: 'top 105%',
                end: 'bottom -30%',
                scrub: true,
              },
              y: 300 / 1920 * scroller.containerEl.clientWidth,  
            })
            gsap.to(imageRef6.current, {
              scrollTrigger: {
                trigger: imageRef6.current,
                start: 'top 105%',
                end: 'bottom top',
                scrub: true,
              },

              y: -50 / 1920 * scroller.containerEl.clientWidth,  
              x: 200 / 1920 * scroller.containerEl.clientWidth
            })
            gsap.to(textRef3.current, {
              scrollTrigger: {
                trigger: textRef3.current,
                start: 'top 105%',
                end: 'bottom -20%',
                scrub: true,
              },
              y: -100 / 1920 * scroller.containerEl.clientWidth,  
              x: 160 / 1920 * scroller.containerEl.clientWidth
            })
            gsap.to(imageRef4.current, {
              scrollTrigger: {
                trigger: imageRef4.current,
                start: 'top 105%',
                end: 'bottom top',
                scrub: true,
              },
              y: -150 / 1920 * scroller.containerEl.clientWidth,  
            })
        }
      }
    }

    
  }, [loaded, scroller]);  

  return (
    <section className="mb-16 md:mb-24 lg:mb-32">
      <div className="flex max-w-screen-2xl mx-auto px-8 lg:px-24 xl:px-32 flex flex-wrap md:mb-24 2xl:mb-64">
        <div className="w-full md:w-2/5 mt-16">
          <div className="overflow-hidden md:-ml-32">
            <div ref={imageRef1} className="opacity-0">
              <ImagePopup image={image1} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 md:pl-24 md:-mt-32">
          <div className="md:pl-24 xl:pl-56">
            <div ref={imageRef2} className="opacity-0">
              <ImagePopup className="mb-10 md:max-w-sm md:ml-auto" image={image2} />
            </div>
          </div>
          <div className="md:mb-16">
            <div ref={firstQuoteRef} className="mb-10 md:mb-0 md:max-w-sm xl:max-w-lg ml-auto opacity-0">
              <Quote 
                text="“Working with Page is simply
                delightful. Team is great and I can
                always rest assured every work will
                be delivered on time”"
                name="Adriana"
                company="Penhaligon’s"
              />
            </div>
            <div ref={imageRef3} className="opacity-0 z-10 realtive">
              <ImagePopup className="mb-10 md:mt-24 xl:mt-32 2xl:mt-64 " image={image3} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2x mx-auto flex flex-wrap justify-between items-start relative z-10 px-8 lg:px-24 xl:px-32">
        <div ref={butterflyRef} className="mb-10 md:mb-0 w-full md:w-1/2">
          <ImagePopup flatImg image={image4} />
        </div>
        <div className="w-full md:w-1/2 md:pl-16 lg:pl-24 xl:pl-32">
          <div ref={textRef2} className="md:max-w-md">
              <Quote 
                  text="“The team at Page has this
                  incredible ability to delivery high
                  quality projects in challenging
                  timing whilst respecting our
                  brand’s DNA. What an amazing
                  partner to collaborate with!”"
                  name="Romy Vlei"
                  company="L’Artisan Parfumeur"
              />
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl flex flex-wrap md:flex-no-wrap mx-auto px-8 lg:px-24 xl:px-32 pt-10 md:pt-24">
        <div className="flex flex-wrap w-full md:w-2/3 md:flex-no-wrap items-end">
          <div ref={imageRef4} className="w-full hidden xl:block md:w-1/3 lg:-ml-40 md:mr-12 ">
            <ImagePopup image={image5} />
          </div>
          <div className="w-full 2xl:w-2/3">
            <div className="mb-10 md:mb-24 md:mb-0 md:max-w-sm" ref={imageRef5} >
                <ImagePopup image={image6} />
            </div>
            <div ref={textRef3} className="w-full mb-10 md:mb-0">
                <Quote 
                    text="“ Creative, organised, fun to work
                    with and delivering projects on
                    time and in budget – only great
                    things to say about our experience
                    working with Page Creative! No idea
                    off-limits and no ask too big, the
                    work they have delivered is amazing
                    quality and completely bespoke;
                    something we wouldn’t have
                    been able to achieve without their
                    knowledge and expertise”"
                    name="Harriet French"
                    company="Walgreens Boots Alliance"
                />
            </div>
          </div>
        </div>
        <div ref={imageRef6} className="w-full md:w-1/3 xl:ml-10 xl:-mr-10 mb-10 md:mb-0">
            <ImagePopup image={image7} />
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
};

export default FloatingImages;