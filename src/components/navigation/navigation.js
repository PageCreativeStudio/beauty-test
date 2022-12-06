import React, { useState,  } from 'react';
import PropTypes from "prop-types";
import {Link} from 'gatsby';

import Menu from '../menu/menu';
import MenuOverlay from '../menu-overlay/menu-overlay';

import './navigation.styles.scss';

const Nav = ({loaded, hoverIn}) => {

  const [toggled, setToggled] = useState(false)
  const [isToggling, setIsToggling] = useState(false)

  const handleClick = () => {
    if (!isToggling) {
      setToggled(!toggled)
      setIsToggling(true)
      setTimeout(() => {
        setIsToggling(false)
      }, 1000)
    } 
  }

  return (
    <div className="flex items-center">
      <Link className="lets-talk border-b-2 border-black border-solid font-semibold tracking-widest uppercase mx-6 duration-300 hover:opacity-50 text-sm md:text-base" to="/contact">Lets Talk</Link>
      <Menu hoverIn={hoverIn} toggled={toggled} loaded={loaded} toggleMenu={handleClick} />
      <MenuOverlay toggled={toggled} />
    </div>
  );


}

Nav.propTypes = {
  loaded: PropTypes.bool,
  hoverIn: PropTypes.bool,
};


export default Nav;