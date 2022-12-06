import React, {useEffect, useState, useRef} from 'react';
import Scrollbar, { ScrollbarPlugin }  from 'smooth-scrollbar';
import PropTypes from "prop-types";
import throttle from 'lodash/throttle';

import './image-fixed-slider.style.scss';

class StopScolling extends ScrollbarPlugin {
    static pluginName = 'stop-scolling';
  
    static defaultOptions = {
      open: false,
    };
  
    transformDelta(delta) {
      return this.options.open ? { x: 0, y: 0 } : delta;
    }
}

const ImageFixedSlider = ({images, bodyScrollBar}) => {
    let [current, setCurrent] = useState(0)
    let fixedImageWrapper = useRef(null); 

    useEffect(() => {
        Scrollbar.use(StopScolling, /* OverscrollPlugin */);
    }, [])

    let handleScrollEvent = throttle((e) => {
        if (e.nativeEvent.wheelDelta > 0) {
            if (current === 0) {
                fixScrolling(false);
            } else {
                fixScrolling(true, -100);
                setCurrent(prevState => prevState - 1)
            }
        } else {
            if (current === images.length - 1) {
                fixScrolling(false);
            } else {
                fixScrolling(true, 100);
                setCurrent(prevState => prevState + 1)
            }                    
        }
    }, 30, { leading: false })
    
    const fixScrolling = (status, offset) => {
        bodyScrollBar.updatePluginOptions('stop-scolling', { open: status });
        if(offset && status) {
          bodyScrollBar.scrollIntoView(fixedImageWrapper.current, {
            alignToTop: true,
            offsetBottom: offset,
          });
        }
    }

    return (
        <div ref={fixedImageWrapper} onWheel={(e) => {
            e.persist();
            handleScrollEvent(e)
        }} className="hidden md:block scroll-slider__wrapper h-screen w-full mx-auto lg:mb-32 md:mb-24 mb-16 relative"> 
            {images.map((image, i) => (
                <img key={i} className={`scroll-slider__image absolute max-w-none h-full ${current === i ? 'opacity-100 block' : 'opacity-0 hidden'}`} src={image} />
            ))}
        </div>
    )
};

ImageFixedSlider.propTypes = {
images: PropTypes.array,
handleScroll: PropTypes.func,
bodyScrollBar: PropTypes.object,
};

export default ImageFixedSlider;