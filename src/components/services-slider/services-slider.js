import React, {useRef, useState, useEffect, useCallback} from 'react';
import gsap, {Power4, Power2, TimelineMax} from 'gsap';
import {Link} from "gatsby"
import BackgroundImage from 'gatsby-background-image';

import {checkScrollDirectionIsUp} from '../../helpers';

import arrow from '../../images/svgs/arrow.svg';

import './services.styles.scss';

const ServicesSlider = ({loaded, scroller, sliderInfo}) => {
  let wrapper = useRef(null);
  let sliders = [{
    title: useRef(null),
    wrapper: useRef(null),
    image: useRef(null),
    link: useRef(null)
  },
  {
    title: useRef(null),
    wrapper: useRef(null),
    image: useRef(null),
    link: useRef(null)
  },
  {
    title: useRef(null),
    wrapper: useRef(null),
    image: useRef(null),
    link: useRef(null)
  }];

  const [curSlide, setCurSlide] = useState(0)
  const [activateSlider, setActivateSlider] = useState(false)
  const [currentlyAnimating, setSurrentlyAnimating] = useState(false)

   // Animate in text
   useEffect(() => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (loaded) {
      // **** Scroll Animation and triggers for each slide ****
      sliders.forEach((slider, i) => {
          if(i === 0) {
          gsap.to(slider.title.current, {
            scrollTrigger: {
              trigger: slider.title.current,
              start: 'top center',
              toggleActions: 'play none none none',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: Power2.ease
          });
          gsap.to(slider.link.current, {
            scrollTrigger: {
              trigger: slider.title.current,
              start: 'top center',
              toggleActions: 'play none none none',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: Power2.ease
          });
        }
        if (scroller && width > 767) {
          let sceneStart = slider.wrapper.current.offsetTop - slider.wrapper.current.offsetHeight;
          const duration =  slider.wrapper.current.offsetHeight * 5;
  
          let requestId = null;
  
          // SCROLL MAGIC!!!
          let tl = new TimelineMax({ paused: true })
            .to(slider.image.current, duration, {y: slider.wrapper.current.offsetHeight * 0.625, ease: Power4.ease }, sceneStart)
  
          scroller.addListener(({offset}) => {
            if(!requestId) requestAnimationFrame(() => { update(offset.y); });
          });
            
          // Set timeline time to scrollTop
          const update = (y) => {
            tl.time(y);
              requestId = null;
          }
  
          update();
        }
      })
    }
  }, [scroller])

  
  const handler = useCallback((e) => {
    e.preventDefault();
  }, []);

  const awaitAnimation = (transition) => {
    setSurrentlyAnimating(true)
    setTimeout(() => {
      setSurrentlyAnimating(false)
    }, transition)
  }

  const fadeText = (duration, y, slide, delay = 0.8) => {
    gsap.to([sliders[slide].title.current, sliders[slide].link.current], {
      y: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: Power2.ease
    });
    gsap.to([sliders[curSlide].title.current, sliders[curSlide].link.current], {
      y: y,
      opacity: 0,
      duration: duration,
      ease: Power2.ease
    });
  }

  const handleWheel = (e) => {
    const transition = 1100
    if (!currentlyAnimating) {
      if (checkScrollDirectionIsUp(e)) {
        if(curSlide === sliderInfo.length - 1 && !activateSlider) {
          setActivateSlider(true);
          scroller.scrollTo(0, sliders[curSlide].wrapper.current.offsetTop, transition, {
            easing:  Power2.easeInOut,
          })
          wrapper.current.addEventListener('wheel', handler, false);
          awaitAnimation(transition);
        } else if(curSlide !== 0 && activateSlider) {
          setCurSlide(curSlide - 1);
          scroller.scrollTo(0, sliders[curSlide - 1].wrapper.current.offsetTop, transition, {
            easing:  Power2.easeInOut,
          })
          wrapper.current.addEventListener('wheel', handler, false);
          awaitAnimation(transition);
          fadeText(0.8, 100, curSlide - 1, 0.6);
        } else {
          setActivateSlider(false);
          wrapper.current.removeEventListener('wheel', handler, false);
        }
      } else {
        if(curSlide < sliderInfo.length - 1) {
          if (curSlide === 0 && !activateSlider) {
            scroller.scrollTo(0, sliders[curSlide].wrapper.current.offsetTop, transition, {
              easing:  Power2.easeInOut,
            })
            awaitAnimation(transition);
            setActivateSlider(true);
            wrapper.current.addEventListener('wheel', handler, false);
          } else {
            setCurSlide(curSlide + 1);
            scroller.scrollTo(0, sliders[curSlide + 1].wrapper.current.offsetTop, transition, {
              easing:  Power2.easeInOut,
            })
            wrapper.current.addEventListener('wheel', handler, false);
            fadeText(0.8, -100, curSlide + 1);
            awaitAnimation(transition);
          }
        } else {
          setActivateSlider(false);
          wrapper.current.removeEventListener('wheel', handler, false);
        }
      }
    }
  } 

  let scrollToServices = (current) => {
    if(current < sliders.length) {
      scroller.scrollTo(0, sliders[current].wrapper.current.offsetTop, 1100, {
        easing:  Power2.easeInOut,
      })
    } else {
      scroller.scrollTo(0, sliders[sliders.length - 1].wrapper.current.offsetTop + scroller.containerEl.clientHeight, 1100, {
        easing:  Power2.easeInOut,
      })
    }
    if(current !== 0 && current < sliders.length) {
      fadeText(0.8, -100, current, 0.6);
      setCurSlide(current);
      awaitAnimation(1100);
      setActivateSlider(true);
    } else if (current !== 0) {
      fadeText(0.8, -100, sliders.length - 1, 0.6);
      setActivateSlider(false);
      setCurSlide(sliders.length - 1);
    } else {
      awaitAnimation(1100);
      setActivateSlider(true);
      setCurSlide(current);
    }
  } 
  
  return (
    <div>
      <div style={{backgroundColor: '#c4d2c8'}} className="py-10 md:py-20 text-center">
        <h3 className="text-fixed-2xl md:text-7xl lg:text-6xl 2xl:text-max-6xl serif-font-regular px-8 mb-2 md:mb-6">What we do</h3>
        <img onClick={() => scrollToServices(0)} alt="arrow"  className="w-10 md:w-20 mx-auto px-4 md:px-8 cursor-pointer" src={arrow} />
      </div>
      <section onWheel={handleWheel} ref={wrapper} style={{backgroundColor: sliderInfo[curSlide].bgColour}} className="services flex flex-wrap w-full">
        {
          sliderInfo && sliderInfo.map((slider, i) => {
              return (
                <div className="flex flex-wrap w-full" key={i}>
                  <div ref={sliders[i].wrapper} className="services__wrapper md:h-screen w-full md:w-1/2 px-8 lg:px-16 xl:px-24 py-12 flex flex-wrap flex-col justify-between">
                    <div ref={sliders[i].title} className="flex-1 md:fade__text--upSoft md:opacity-0 md:mt-16">
                      <h3 className="text-fixed-2xl md:text-9xl lg:text-8xl 2xl:text-max-8xl leading-none mb-6 md:mb-12">
                        {slider.title} 
                      </h3>
                      <p className="leading-relaxed max-w-xl md:text-lg mb-6 md:mb-8">
                      {slider.text}
                      </p>
                      <Link    
                      to={slider.link.to}
                      >
                        <span className="leading-none underline text-xl md:text-6xl lg:text-5xl 2xl:text-max-5xl serif-font-regular"> {slider.link.text}</span>
                      </Link>
                    </div>
                    <div ref={sliders[i].link} className="hidden md:block md:fade__text--upSoft md:opacity-0 -ml-8">
                      <img onClick={() => scrollToServices(i + 1)} className="w-20 px-8 cursor-pointer" src={arrow} />
                    </div>
                  </div>
                  <div className="services__imagewapper w-full md:w-1/2 md:h-screen relative overflow-hidden" >
                    <Link    
                      to={slider.link.to}
                    >
                      <div className="services__image-aniamtionhover relative w-full h-full">
                        <div ref={sliders[i].image} className="services__image h-full absolute inset-0" >
                          <BackgroundImage 
                            tag="div"
                            fluid={slider.image}
                            className="h-full w-full" 
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            }
          )
        }
      </section>
    </div>
  );
}

export default ServicesSlider;