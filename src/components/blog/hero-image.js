import React, {useRef} from 'react';
import PropTypes from "prop-types";
import {Power1, TimelineMax} from 'gsap';

const HeroImage = ({bodyScrollBar, image}) => {
    let bgImage = useRef(null);
    console.log(bodyScrollBar)
    if (bodyScrollBar) {
        var sceneStart = 0;
        var duration = 2000;
        var requestId = null;
  
        // SCROLL MAGIC!!!
        var tl2 = new TimelineMax({ paused: true })
          .to(bgImage.current, duration, { scale: 1.2, rotate:10, y: 300, ease: Power1.ease }, sceneStart)
  
        bodyScrollBar.addListener(({offset}) => {
          if(!requestId) requestAnimationFrame(() => { update(offset.y); });
        });
  
        // Set timeline time to scrollTop
        const update = (y) => {
            tl2.time(y);
            requestId = null;
        }
  
        update();
    }

    return (
        <div  className="post-hero w-full mt-20 md:mt-32 mb-16 relative overflow-hidden">
            <div className="bg-center bg-cover bg-no-repeat absolute inset-0" ref={bgImage} style={{backgroundImage: `url(${image})`}} />
        </div>
    )
}

HeroImage.propTypes = {
    image: PropTypes.string,
    bodyScrollBar: PropTypes.object,
};
export default HeroImage;
