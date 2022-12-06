import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Scrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ScaleSpeedPlugin from '../../scroll-plugins/speed'
import Header from '../header/header';

const CustomScroll = ({hoverIn, showOnLoad, children, light}) => {
  let [bodyScrollBar, setBodyScrollBar] = useState(false);
  let [loaded] = useState(true);
  let [scrollerReady, setScrollerReady] = useState(false);

  Scrollbar.use(ScaleSpeedPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  
  if (typeof window !== `undefined`) {
    if (window.innerWidth > 767 || document.documentElement.clientWidth > 767 || document.body.clientWidth > 767) {
      useEffect(() => {
        window.scrollTo(0,0);
        setBodyScrollBar(Scrollbar.init(document.querySelector('#smooth-scroll'), {
          damping: 0.08, 
          delegateTo: document,
          plugins: {
            speedPlugin: {
              speed: 0.6,
            },
          },
        }));      
        setScrollerReady(true)
      }, [])
      useEffect(() => {
        if(!bodyScrollBar) return        
        bodyScrollBar.addListener(() => {  
          ScrollTrigger.refresh();
        });
        
        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove();
    
        ScrollTrigger.scrollerProxy("body", {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          }
        });
    
        bodyScrollBar.addListener(ScrollTrigger.update);

        bodyScrollBar.update();
        setTimeout(() => {
          bodyScrollBar.update();
        }, 1500)
        return () => {
          bodyScrollBar.destroy()
        }       
      }, [bodyScrollBar])
    }
  }


  return (
    <div>
      {loaded && <Header light={light} hoverIn={hoverIn} showOnLoad={showOnLoad} scrollerReady={scrollerReady} scroller={bodyScrollBar} loaded />}
      <div id="smooth-scroll" className="smooth-scroll-pin">
        <div className="scroll-content">
          {children({scrollerReady:scrollerReady, bodyScrollBar:bodyScrollBar , loaded:loaded })}
        </div>
      </div>
    </div>
  )
}

CustomScroll.propTypes = {
  hoverIn: PropTypes.bool,
  showOnLoad: PropTypes.bool,
  children: PropTypes.func.isRequired,
  light: PropTypes.bool,
};

export default CustomScroll;