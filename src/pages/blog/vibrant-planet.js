import React, {useEffect, useRef} from "react";
import { gsap, Power3 } from 'gsap';
import {Link} from "gatsby"

import CustomScroll from '../../components/custom-scroll/custom-scroll';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeroImage from '../../components/blog/hero-image';

import image from '../../images/Packaging/gallery/Bare-Minerals-The-Power-of-Good.jpg';
import image2 from '../../images/blog/palette.jpg';

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
      { ({ bodyScrollBar, loaded }) => 
        <Layout  loaded={loaded}>
          <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title="Sure, your colour palette is important – but a vibrant planet is absolutely vital"
          />
          <div className="bg-offWhite mb-16 md:mb-24">
            <div ref={bgImageWrapper} className="fade-up opacity-0">
              <HeroImage image={image} bodyScrollBar={bodyScrollBar} />
            </div>
            <section className="max-w-6xl mx-auto px-8 pb-16 md:pb-24">
              <h1 ref={title} className="tracking-wide titleText splitAnimation text-fixed-3xl md:text-7xl lg:text-6xl leading-tight serif-font-light fade-up opacity-0 mb-4 md:mb-8 md:mb-0">Sure, your colour palette is important – but a vibrant planet is absolutely vital</h1>
              <div ref={text} className="fade-up opacity-0 mb-10">
              <p className="text-xl mb-10">
                  Anyone who works in the beauty business will be all too aware of the great lengths to which every company is going to reduce their carbon footprint. Having Page Beauty as your design and print partner is half the battle – we source and use the most sustainable materials available, on all your projects.
                  <br/><br/>
                  We, and all our suppliers, make every effort to protect the environment with the materials we use. It’s heartening to know papers, boards and inks are improving all the time in terms of using recycled or natural materials, recyclability and waste reduction. 
                  <br/><br/>
                  Here are a couple of recent projects we’ve printed and manufactured using the environmentally friendly choice of vegetable-based inks and recycled box materials. 
                  <br/><br/>
                  We created this cute little cube for Rimmel to send out to influencers, and bareMinerals wanted a mailing box that reflected their credo: Clean without compromising performance. This smart piece of packaging fits the bill
                </p>
                <img className="mx-auto mb-10" src={image2} />
                <p className="text-xl mb-10">
                  Looking for an experienced partner to help you build awareness for your beauty brand in a responsible and sustainable way <Link className="underline font-bold" to="/contact">Contact us</Link> today, we’d love to hear from you. Mwah!...
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
