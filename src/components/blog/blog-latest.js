import React, {useRef, useEffect} from 'react';
import {Link} from 'gatsby';
import gsap from 'gsap';
import BackgroundImage from 'gatsby-background-image';

import {animateUp} from '../../animations';

import './blog-latest.style.scss'

const BlogFeed = ({loaded, title, blog1, blog2, blog3}) => {

  const titleRef = useRef(null);
  const blogWrapper = useRef(null);

  useEffect(() => {
    if (loaded) {
      animateUp(titleRef.current)
      gsap.to(blogWrapper.current.children, {
        scrollTrigger: {
          trigger: blogWrapper.current,
        },
        opacity: 1, 
        y: 0,
        duration: 1,
        stagger: { // wrap advanced options in an object
          each: .35,
          ease: "power3.easeOut",
        }
      })
    }
  }, [loaded])

  return (
    <div className="bg-grey pt-10 md:pt-24 md:mb-12 md:mb-48 pb-10 md:pb-0">
      {title && <h3 ref={titleRef} className="text-center text-fixed-2xl md:text-7xl lg:text-8xl 2xl:text-max-8xl leading-none mb-10 md:mb-64 md:pb-16">
        {title}
      </h3>}
      <div className="lg:p-12 relative">
        <div ref={blogWrapper} className="flex flex-wrap max-w-screen-2xl mx-auto relative z-10">
          {blog1 && <div className="w-full md:w-1/3 px-8 md:px-4 lg:px-12 md:-mt-64 bloglatest fade__text--upSoft opacity-0 mb-10 md:mb-0">
            <BackgroundImage 
              tag="div"
              fluid={blog1.image}
              className="bloglatest__image w-full mb-4 md:mb-8"
            />
            <h4 className="uppercase text-xl md:text-5xl lg:text-4xl 2xl:text-max-4xl leading-tight mb-3 serif-font-medium">{blog1.title}</h4>
            <Link to={blog1.link} className="tracking-widest text-lg py-1 leading-tight text-red-600 px-3 border border-solid border-red-600 duration-300 hover:bg-black hover:text-white hover:border-black">
              READ MORE
            </Link>
          </div>}
          {blog2 && <div className="flex flex-col flex-wrap items-start w-full md:w-1/3 px-8 md:px-4 lg:px-12 fade__text--upSoft opacity-0 mb-10 md:-mb-40">
            <h4 className="uppercase text-xl md:text-5xl lg:text-4xl 2xl:text-max-4xl leading-tight mb-2 serif-font-medium">{blog2.title}</h4>
            <Link to={blog2.link} className="tracking-widest text-lg py-1 text-red-600 px-3 leading-tight border border-solid border-red-600 duration-300 hover:bg-black hover:text-white hover:border-black md:mb-5">
              READ MORE
            </Link>
            <BackgroundImage 
              tag="div"
              fluid={blog2.image}
              className="order-first mb-4 md:mb-0 md:order-last bloglatest__image w-full"
            />
          </div>}
          {blog3 && <div className="w-full md:w-1/3 px-8 md:px-4 lg:px-12 md:-mt-40 fade__text--upSoft opacity-0">
              <BackgroundImage 
                tag="div"
                fluid={blog3.image}
                className="bloglatest__image w-full mb-4 md:mb-8"
              />
            <h4 className="uppercase text-xl md:text-5xl lg:text-4xl 2xl:text-max-4xl leading-tight mb-3 serif-font-medium">{blog3.title}</h4>
            <Link to={blog3.link} className="tracking-widest text-lg py-1 leading-tight text-red-600 px-3 border border-solid border-red-600 duration-300 hover:bg-black hover:text-white hover:border-black">
              READ MORE
            </Link>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default BlogFeed;