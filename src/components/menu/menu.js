import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";

import {Power3, TimelineLite} from 'gsap';


import './menu.style.scss';

const Menu = ({loaded, toggled, toggleMenu, hoverIn}) => {

  const handleClick = () => {
    toggleMenu()
  }

  let menu = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    if(loaded && hoverIn) {  
      tl.to(menu.current, {opacity: 1, y: 0, duration: 0.2, ease: Power3.ease, delay: 2})
    }
  }, [loaded]);

  const toggleText = toggled ? 'BACK' : 'MENU'

  return (
    <div onClick={handleClick} className={`${toggled && 'text-white'} menu fade__text--upMenu flex flex-wrap justify-center items-center ${hoverIn ? 'opacity-0' : 'opacity-100 menu--active' } cursor-pointer text-xs`} ref={menu}>
      <div className="menu__textwrapper">
        <span className={`${toggled && 'text-white'} duration-300`}>{toggleText}</span>
      </div>
    </div>
  );
}

Menu.propTypes = {
  loaded: PropTypes.bool,
  toggled: PropTypes.bool,
  toggleMenu: PropTypes.func,
  hoverIn: PropTypes.bool,
};

export default Menu;