import React, {useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import {Link} from 'gatsby';

import {TimelineLite, Expo} from 'gsap';

import './menu-overlay.styles.scss';
import instaIcon from "../../images/instagram.svg"

const MenuOverlay = ({toggled}) => {

  let menuList = useRef(null);
  let menuItems = useRef(null);

  let tlOpen = new TimelineLite();
  let tlClose = new TimelineLite();


  useEffect(() => {
    if (toggled) {
      tlOpen.to(menuList.current, {opacity: 1, visibility: 'visible', duration: 0.5, ease: Expo}, 'open')
      tlOpen.to(menuItems.current.children, {
          opacity: 1, 
          y: 0,
          duration: 0.5,
          stagger: { // wrap advanced options in an object
            each: 0.25,
            ease: "power3.easeOut",
          }
        })
    } else {
      tlClose.to(menuItems.current.children, {
        opacity: 0, 
        duration: 0.5,
        y: -60,
        stagger: { // wrap advanced options in an object
          each: 0.25,
          ease: "power3.easeOut",
        }
      }, 'close')
      .to(menuList.current, {opacity: 0, duration: 0.5, ease: Expo})
      .to(menuList.current, {visibility: 'hidden', duration: 0.01})
    }
  }, [toggled]);

  return (
    <div ref={menuList} className="main-nav absolute left-0 w-full h-screen flex flex-wrap flex-col items-center justify-center text-center leading-tight">
      <ul ref={menuItems} className="flex flex-wrap justify-center leading-none main-nav__list relative md:text-left w-full">
        <div>
          <li><Link to="/"><h3 className="main-nav__item--small roboto">Home</h3></Link></li>
          <li><Link to="/about/"><h3 className="main-nav__item--small roboto">About us</h3></Link></li>
          <li><Link to="/gallery/"><h3 className="main-nav__item--small roboto">Our work</h3></Link></li>
          <li><Link to="/blog/"><h3 className="main-nav__item--small roboto">Blog</h3></Link></li>
          <li className="mb-5 md:mb-10"><Link to="/contact/"><h3 className="main-nav__item--small roboto">Contact us</h3></Link></li>
        </div>
        <div className="md:pl-24">
          <li><Link to="/influencer-marketing/"><h3 className="main-nav__item--large">Influencer Marketing</h3></Link></li>
          <li><Link to="/essentials/"><h3 className="main-nav__item--large">Brand Essentials</h3></Link></li>
          <li><Link to="/packaging/"><h3 className="main-nav__item--large">Perfect Packaging</h3></Link></li>
        </div>
      </ul>
    </div>
  );
}

MenuOverlay.propTypes = {
  toggled: PropTypes.bool,
};

export default MenuOverlay;