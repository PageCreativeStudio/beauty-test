import React from 'react';
import PropTypes from "prop-types";

import './scroll-icon.style.scss';

const ScrollIcon = ({colour}) => (
    <div>
        <div className="scroller__mouse">
            <div style={{backgroundColor: colour}} className="scroller__bg"/>
            <div className="scroller__ball"/>

        </div>
    </div>
);

ScrollIcon.propTypes = {
    colour: PropTypes.string,
};
  
export default ScrollIcon;
