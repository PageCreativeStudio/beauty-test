import React, {useEffect, useRef} from "react";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CustomScroll from '../components/custom-scroll/custom-scroll';

const NotFoundPage = () => {
  let title = useRef(null);
  let subtitle = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let hoverInElements = [title.current, subtitle.current]
    hoverInElements.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        y: 0,
        x: 0,
        opacity: 1, 
        duration: 1.5, 
        ease: Power3.easeOut,
      })
    })
    return () => {
      gsap.killTweensOf(hoverInElements);
    }

  }, [])

  return (
    <CustomScroll showOnLoad >
      {({loaded}) => 
        <Layout  loaded={loaded} noFooterBanner>
          <SEO
            title="404: Not Found"
          />
          <section className="max-w-screen-xl mx-auto pt-32 md:pt-40 mb-10 md:mb-32 text-center px-8">
            <h1 ref={title} className="tracking-wide titleText splitAnimation text-fixed-2xl md:text-8xl lg:text-7xl 2xl:text-max-7xl leading-tight serif-font-medium fade-up opacity-0 mb-5 md:mb-12">404 Page not found</h1>
            <div ref={subtitle} className="fade-up opacity-0">
              <Link className="inline-block cursor-pointer duration-300 text-base lg:text-xl 2xl:text-max-xl tracking-widest p-5 bg-black text-white hover:shadow-lg hover:bg-pink-800" to="/">
                Go to home
              </Link>
            </div>
          </section>
        </Layout>
      }
    </CustomScroll>
  );
}

export default NotFoundPage;
