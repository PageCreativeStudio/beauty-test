import React from 'react';
import PropTypes from "prop-types";
import {Link} from "gatsby"

import './single-post-snippet.style.scss';

const SinglePostSnippet = ({image, text, title, link}) => (
  <div className={`post-snippet w-full h-full relative overflow-hidden flex flex-wrap flex-col justify-center items-center`}>
    <Link    
      to={link}
    >
      {image ? 
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${image})`}} /> 
      :
      <div className="absolute inset-0" style={{backgroundColor: '#312e2b'}} /> 
      } 
      <div className="post-snippet__content relative z-10 text-white text-center p-8">
        {title && <h3 className="text-fixed-2xl md:text-5xl 2xl:text-max-5xl serif-font-thin text-white mb-4 md:mb-8">{title}</h3>}
        {text && <p className="mb-4 md:mb-8 text-white">{text}</p>}
        <span className="block h-px bg-white w-32 mx-auto mb-4 md:mb-8"></span>
      </div>
      <div className="post-snippet__overlay absolute inset-0" style={{backgroundColor: '#312e2b'}} /> 
    </Link>
  </div>
);

SinglePostSnippet.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string
};

export default SinglePostSnippet;