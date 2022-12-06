import React, {useEffect, useRef} from "react";
import { gsap, Power3 } from 'gsap';
import {Link} from "gatsby"

import CustomScroll from '../../components/custom-scroll/custom-scroll';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeroImage from '../../components/blog/hero-image';

import image from '../../images/Packaging/gallery/Penhaligons-Small-Sprays-1_retouched.jpg';
import image2 from '../../images/blog/penhaligons.jpg';

const Post = () => {

  let title = useRef(null);
  let text = useRef(null);
  let postimage = useRef(null);
  let bgImageWrapper = useRef(null);

  useEffect(() => {
    let hoverInElements = [title.current, text.current, postimage.current, bgImageWrapper.current]
    hoverInElements.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
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
    <CustomScroll showOnLoad>
      {({ bodyScrollBar, loaded }) => 
        <Layout  loaded={loaded}>
          <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title="Privacy Policy"
          />
          <div className="bg-offWhite mb-16 md:mb-24">
            <div ref={bgImageWrapper} className="fade-up opacity-0">
              <HeroImage image={image} bodyScrollBar={bodyScrollBar} />
            </div>
            <section className="max-w-6xl mx-auto px-8 pb-16 md:pb-24">
              <h1 ref={title} className="tracking-wide titleText splitAnimation text-fixed-3xl md:text-7xl lg:text-6xl leading-tight serif-font-light fade-up opacity-0 mb-4 md:mb-8 md:mb-0">The perfect package for Penhaligon’s fragrances</h1>
              <div ref={text} className="fade-up opacity-0 mb-10">
              <p className="text-xl mb-10">
                  Our amazing client Penhaligon’s has been entertaining the world’s nostrils with a dose of Britishness since 1870.
                  <br/><br/>
                  We are no strangers to Penhaligon’s totally unique, quirky and quintessentially British vibe, as we’ve worked with the company for over a decade?. 
                  <br/><br/>
                  We recently designed and produced some beautiful little presentation ‘hat’ boxes for the company, to house a selection of Penhaligon’s gorgeous fragrances. The brief was to wow buyers at a trade show in Cannes and provide a feast for the eyes as well as the nostrils!
                  <br/><br/>
                  The ornate, festooned and swagged  packaging, enhanced with gold foiling,  is designed to reflect that unmistakeable Penhaligon’s combination of essential London style, whilst showcasing the heady and sumptuous aromas drawn from every continent.
                  <br/><br/>
                  The team at Penhaligon’s couldn’t have been more pleased …. and we were pretty chuffed with the end result……
                </p>
                <img className="mx-auto mb-10" src={image2} />
                <p className="text-xl mb-10">
                  Looking for an experienced partner to help you build awareness for your beauty brand in a responsible and sustainable way? <Link className="underline font-bold" to="/contact">Contact us</Link> today, we’d love to hear from you. Mwah!...
                </p>
              </div>
              <Link    
                className="tracking-widest text-xl mx-auto text-center duration-300 hover:opacity-50 block"
                to="/blog"
              >
                  Please peruse more of our beauty work 
              </Link>
            </section>
          </div>
        </Layout>
      }
    </CustomScroll>
  );
}

export default Post;
