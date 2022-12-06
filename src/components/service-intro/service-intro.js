import React, {useEffect, useRef}  from 'react';
import gsap from 'gsap';
import Img from 'gatsby-image';
import {Link} from 'gatsby';

const ServiceIntro = ({scroller, image, title, text, list, noPadding, sub, largeText, scrollingImage, gif}) =>  {
  let mainImage = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (scroller) {
      if(width > 767) {
        setTimeout(() => {
          // SCROLL MAGIC!!!
          if (textRef.current.offsetHeight > mainImage.current.offsetHeight) {
            gsap.to(mainImage.current, {
              scrollTrigger: {
                trigger: mainImage.current,
                start: 'center 50%',
                end: 'bottom 20%',
                endTrigger: textRef.current,
                scrub: true,
              },
              y:  -(mainImage.current.offsetHeight - textRef.current.offsetHeight), 
            })
          }
        }, 500)
      }
    }
  }, [scroller])

  return (
    <section className={`max-w-screen-2xl mx-auto px-8 lg:px-24 xl:px-32 mb-8 md:mb-20 lg:mb-24 ${noPadding ? 'lg:-mt-32' : 'pt-32 md:pt-32'} w-full`}>
      <h1 className="leading-none text-fixed-3xl md:text-8/9xl 2xl:text-max-8/9xl mb-5 xl:mb-20 fade__text--upSoft opacity-0">{title && title}</h1>
      <div className="flex flex-wrap items-start">
        <div className={`${scrollingImage && 'overflow-y-scroll h-64'} w-full sm:w-1/3 mb-5 sm:mb-0`}>
          <div ref={mainImage}  class="w-full fade__text--upSoft opacity-0">
            {gif ? 
              <img className={`w-full`} src={image} alt="intro" />
              :
              <Img className={`w-full`} fluid={image} alt="intro" />
            }
          </div>
        </div>
        <div ref={textRef} className="sm:pl-8 md:pl-12 lg:pl-20 xl:pl-24 w-full sm:w-2/3">
          {text && <h3 className={`text-fixed-2xl md:text-5xl serif-font-light ${!largeText ? 'lg:text-5xl 2xl:text-max-5xl' : 'lg:text-6xl 2xl:text-max-6xl'} leading-tight mb-5 sm:mb-6 md:mb-8 xl:mb-16 fade__text--upSoft opacity-0`}>{text}</h3> }
          {sub && <p className="fade__text--upSoft opacity-0 text-xl mb-10">{sub}</p>}
          {list && 
            <ul className="list-disc leading-relaxed pl-6 fade__text--upSoft opacity-0 text-xl">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          }
          <Link to="/contact" class="text-black inline-block md:text-lg lg:text-xl tracking-widest border border-solid border-black py-2 md:py-3 px-12 duration-300 hover:bg-black hover:text-white mt-10">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceIntro;