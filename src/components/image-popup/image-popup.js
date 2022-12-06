import React from 'react';
import Img from 'gatsby-image';

const ImagePopup = ({image, className, wfull, fixed, flatImg}) => (
  <div className={`${className} ${wfull ? 'w-full' : ''}` }>

    {!flatImg && fixed &&
      <Img alt="popup image" className={`${wfull ? 'w-full' : ''}` } fixed={image} />
    }
    {!flatImg &&
      <Img alt="popup image" className={`${wfull ? 'w-full' : ''}` } fluid={image} />
    }
    {flatImg && <img alt="popup image" className={`${wfull ? 'w-full' : ''}` } src={image} />}
  </div>
);

export default ImagePopup;