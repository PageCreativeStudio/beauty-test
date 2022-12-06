import React, {useRef, useEffect} from 'react';
import Img from 'gatsby-image';

import gsap, {Power3} from 'gsap';

import './full-image.style.scss';

const FullImage = ({image, className, loaded, marginBottom, overflow}) => {
  let imageRef = useRef(null);
  useEffect(() => {
    if (imageRef && loaded) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse'
        },
        scale: 1, 
        rotate: 0, 
        duration: 1.6, 
        ease: Power3.easeOut,
      })
    }
  }, [loaded]);

  return (
    <div className={`${className} ${overflow ? 'overflow-hidden' : ''} `}>
      <div className="full-image" ref={imageRef}>
        <Img className={`w-full ${marginBottom && 'mb-16 md:mb-32'} -mt-px`} fluid={image} />
      </div>
    </div>
  );
}

export default FullImage;