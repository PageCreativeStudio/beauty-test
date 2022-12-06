import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import {Link} from 'gatsby';
import { gsap, Power3 } from 'gsap';


// import facebookIcon from "../images/facebook.svg";
import instaIcon from "../images/instagram.svg";
// import twitterIcon from "../images/twitter.svg";

import logo from "../images/logo/page.png"

const Footer = ({noBanner, marginTop, loaded}) => {
  let instagram = useRef(null);
  let talk = useRef(null);
  let footer = useRef(null);
  let bottomBar = useRef(null);
  useEffect(() => {
    if (loaded) {
      if(talk.current) {
        gsap.to(talk.current.children,  {
          scrollTrigger: {
            trigger: talk.current,
            start: 'center bottom',
          },
          stagger: 0.2,
          y: 0,
          opacity: 1, 
          duration: 1.5, 
          ease: Power3.easeOut,
        })
      }
      
      gsap.to(footer.current.children,  {
        scrollTrigger: {
          trigger: footer.current,
          start: 'center bottom',
        },
        stagger: 0.2,
        y: 0,
        opacity: 1, 
        duration: 1.5, 
        ease: Power3.easeOut,
      })

      gsap.to(instagram.current,  {
        scrollTrigger: {
          trigger: instagram.current,
          start: 'bottom bottom',
        },
        y: 0,
        opacity: 1, 
        duration: 1.5, 
        ease: Power3.easeOut,
      })
      gsap.to(bottomBar.current,  {
        scrollTrigger: {
          trigger: bottomBar.current,
          start: 'top bottom',
        },
        y: 0,
        opacity: 1, 
        duration: 1.5, 
        ease: Power3.easeOut,
      })
    }
  }, [loaded])

  return (
    <div className={`bg-white text-center ${marginTop && 'md:pt-4'}`}>
      <a href="https://www.instagram.com/pagebeautyUK" target="_blank" rel="noreferrer" ref={instagram} className="fade-up opacity-0 tracking-ig text-center md:text-lg md:mb-12 lg:mb-24 px-10 py-8 bg-pink-800 inline-block mx-auto">
        <svg className="md:inline-block mx-auto md:mr-12 align-middle	md:-mt-2 mb-2 md:mb-0" height="35px" viewBox="0 0 512 512.00006" width="35px" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="m261.039062 512c-1.695312 0-3.390624 0-5.097656-.007812-40.132812.097656-77.214844-.921876-113.277344-3.117188-33.0625-2.011719-63.242187-13.4375-87.28125-33.039062-23.195312-18.914063-39.035156-44.488282-47.078124-76.003907-7-27.4375-7.371094-54.371093-7.726563-80.421875-.257813-18.691406-.5234375-40.839844-.578125-63.363281.0546875-22.617187.320312-44.765625.578125-63.457031.355469-26.046875.726563-52.980469 7.726563-80.421875 8.042968-31.515625 23.882812-57.089844 47.078124-76.003907 24.039063-19.601562 54.21875-31.027343 87.285157-33.039062 36.0625-2.191406 73.152343-3.2148438 113.371093-3.1171875 40.144532-.0859375 77.214844.9257815 113.277344 3.1171875 33.0625 2.011719 63.242188 13.4375 87.28125 33.039062 23.199219 18.914063 39.035156 44.488282 47.078125 76.003907 7 27.4375 7.371094 54.375 7.726563 80.421875.257812 18.691406.527344 40.839844.578125 63.363281v.09375c-.050781 22.523437-.320313 44.671875-.578125 63.363281-.355469 26.046875-.722656 52.980469-7.726563 80.421875-8.042969 31.515625-23.878906 57.089844-47.078125 76.003907-24.039062 19.601562-54.21875 31.027343-87.28125 33.039062-34.535156 2.101562-70.011718 3.125-108.277344 3.125zm-5.097656-40.007812c39.480469.09375 75.730469-.902344 110.945313-3.042969 25-1.519531 46.675781-9.632813 64.433593-24.113281 16.414063-13.386719 27.71875-31.855469 33.597657-54.894532 5.828125-22.839844 6.164062-47.363281 6.488281-71.078125.253906-18.566406.519531-40.558593.574219-62.863281-.054688-22.308594-.320313-44.296875-.574219-62.863281-.324219-23.714844-.660156-48.238281-6.488281-71.082031-5.878907-23.039063-17.183594-41.507813-33.597657-54.894532-17.757812-14.476562-39.433593-22.589844-64.433593-24.109375-35.214844-2.144531-71.464844-3.132812-110.851563-3.046875-39.472656-.09375-75.726562.902344-110.941406 3.046875-25 1.519531-46.675781 9.632813-64.433594 24.109375-16.414062 13.386719-27.71875 31.855469-33.597656 54.894532-5.828125 22.84375-6.164062 47.363281-6.488281 71.082031-.253907 18.582031-.519531 40.585937-.574219 62.910156.054688 22.226563.320312 44.234375.574219 62.816406.324219 23.714844.660156 48.238281 6.488281 71.078125 5.878906 23.039063 17.183594 41.507813 33.597656 54.894532 17.757813 14.476562 39.433594 22.589843 64.433594 24.109374 35.214844 2.144532 71.476562 3.144532 110.847656 3.046876zm-.953125-90.992188c-68.921875 0-125-56.074219-125-125s56.078125-125 125-125c68.925781 0 125 56.074219 125 125s-56.074219 125-125 125zm0-210c-46.867187 0-85 38.132812-85 85s38.132813 85 85 85c46.871094 0 85-38.132812 85-85s-38.128906-85-85-85zm139-80c-16.566406 0-30 13.429688-30 30s13.433594 30 30 30c16.570313 0 30-13.429688 30-30s-13.429687-30-30-30zm0 0"/></svg>
        FOLLOW US ON INSTAGRAM <span className="font-bold">@PAGEBEAUTYUK</span>
      </a>
      {!noBanner && <div className="bg-offWhite py-16 lg:py-24 px-8">
        <div className="flex flex-wrap justify-center text-center">
          <div ref={talk} className="w-full">
            <h4 className="fade-up opacity-0 no-underline text-fixed-2xl lg:text-5xl 2xl:text-max-5xl uppercase serif-font-regular leading-none">
              LET’S TALK
            </h4>
            <p className="fade-up opacity-0 mb-3 tracking-wide text-xl lg:text-4xl 2xl:text-max-4xl md:mb-5 serif-font-regular leading-tight">
              Tell us about your next project.
            </p>
            <div className="fade-up opacity-0 text-red-600 tracking-widest md:text-xl mb-5 md:mb-10">
              <a className="block md:inline-block duration-300 hover:opacity-50" href="mailto:studio@pagecreative.co.uk">
                studio@pagecreative.co.uk 
              </a>
              <span className="hidden md:inline-block px-4 text-red-600">|</span>
              <a className="block md:inline-block duration-300 hover:opacity-50" href="tel:+441268271858">
              +44 (0) 1268 271858
              </a>
            </div>
            <Link to="/contact" className="block fade-up opacity-0 underline text-fixed-2xl lg:text-4xl 2xl:text-max-4xl serif-font-regular leading-none duration-300 hover:opacity-50">
              Or use our form
            </Link>
          </div>
        </div>
      </div>}
      <footer className="bg-black pt-16 md:pt-24 text-center px-8">
        <nav ref={footer} className="max-w-4xl mx-auto text-sm">
          <h3 className="fade-up opacity-0 no-underline text-white text-fixed-2xl xl:text-5xl 2xl:text-max-5xl uppercase mb-2 md:mb-6">
            <img alt="Page Beauty"  className="w-32 md:w-40 mx-auto" src={logo} />
          </h3>
          <p className="fade-up opacity-0 text-white font-light mb-4 md:mb-16 tracking-widest text-xl lg:text-4xl 2xl:text-max-4xl">
            Making all things beautiful.
          </p>
          <p className="fade-up opacity-0 text-white mb-2 md:text-lg tracking-widest uppercase">
            10 Progress Business Park, Progress Road, Leigh-on-Sea, Essex, SS9 5PR
          </p>
          <p className="fade-up opacity-0 text-white font-bold  md:text-lg tracking-widest mb-6">
          01268 271858 <span className="px-2 text-white">|</span> <a href="mailto:studio@pagecreative.co.uk">studio@pagecreative.co.uk</a>
          </p>
          <div className="fade-up opacity-0 flex flex-wrap items-center justify-center pb-10">
            <div className="px-4">
            <a rel="noreferrer" target="_blank" className="social-link" href="https://www.instagram.com/pagebeautyUK">
              <img alt="instagram icon" src={instaIcon} />
            </a>
            </div>
          </div>
        </nav>
      </footer>
      <div ref={bottomBar} className="fade-up opacity-0 flex flex-wrap justify-center px-8 py-8 uppercase text-xs tracking-widest">
        <Link to="/terms-conditions">Terms</Link>
        <Link to="/privacy-policy" className="mx-4">Privacy</Link>
        <Link to="/cookie-policy">Cookies</Link>
      </div>
    </div>
  );
}

Footer.propTypes = {
  loaded: PropTypes.bool,
  noBanner: PropTypes.bool,
  marginTop: PropTypes.bool
};

export default Footer;