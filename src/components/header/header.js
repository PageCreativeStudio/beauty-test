import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from 'gatsby';
import throttle from 'underscore/modules/throttle.js'

import Nav from '../navigation/navigation';

import { isBrowser} from '../../helpers';

import './header.styles.scss';

import logo from '../../images/logo/logo-dark.svg'

const Header = ({loaded, scroller, scrollerReady, showOnLoad, hoverIn, light}) => {
  let headerLogo = useRef(null);
  let header = useRef(null);
  let nav = useRef(null);

  useEffect(() => {
    if (isBrowser) {
      if (scroller) {
        scroller.addListener(({offset}) => {
          headerScroll(offset)
        });
      } else {
        window.addEventListener('scroll', (e) => {
          headerScroll({x: 0, y: e.currentTarget.scrollY})
        })
      }
    }
  }, [loaded, scrollerReady])

  const headerScroll = throttle((offset) => {
    if(offset.y > 50) {
      if (!showOnLoad) {
        headerLogo.current.classList.add('animate-logo-in');
      }
      if(headerLogo.current) headerLogo.current.classList.remove('header__logo--large')
      if(header.current) header.current.classList.remove('md:py-10')
      if(header.current) header.current.classList.add('bg-white')
      if(light) {
        if(headerLogo.current) headerLogo.current.classList.remove('header__logo--light')
        if(nav.current) nav.current.classList.remove('menu--light')
      }
    }
    else {
      if (!showOnLoad) {
        if(headerLogo.current) headerLogo.current.classList.remove('animate-logo-in');
      } 
      if(headerLogo.current) headerLogo.current.classList.add('header__logo--large')
      if(header.current) header.current.classList.add('md:py-10')
      if(header.current) header.current.classList.remove('bg-white')
      if(light) {
        if(headerLogo.current) headerLogo.current.classList.add('header__logo--light')
        if(nav.current) nav.current.classList.add('menu--light')
      }
    }
  }, 150)

  return (
    <header ref={header} className="header md:bg-transparent flex justify-between py-4 md:py-10 mx-auto w-full relative z-50 px-8 md:px-16 lg:px-20 xl:px-24 items-center duration-300">
        <Link to="/"><img alt="Page Beauty" src={logo} ref={headerLogo} className={`header__logo ${light && 'header__logo--light'} header__logo--large w-16 h-auto uppercase ${!showOnLoad ? 'opacity-0' : 'opacity-100 header__logo--active' } leading-none`}/></Link>
        <div ref={nav} className={`${light && 'menu--light'}`}>
          <Nav hoverIn={hoverIn} loaded={loaded} />
        </div>
    </header>
  );
}


Header.propTypes = {
  loaded: PropTypes.bool,
  scroller: PropTypes.object,
  scrollerReady: PropTypes.bool,
  showOnLoad: PropTypes.bool,
  hoverIn: PropTypes.bool,
  light:  PropTypes.bool,
};


export default Header;
