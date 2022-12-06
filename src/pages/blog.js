import React, {useEffect, useRef} from "react";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import SinglePostSnippet from '../components/blog/single-post-snippet';
import InstaFeed from '../components/insta-feed/insta-feed';

import image from '../images/Packaging/gallery/Bare-Minerals-The-Power-of-Good.jpg';
import image2 from '../images/Packaging/gallery/Penhaligons-Small-Sprays-1_retouched.jpg';
import image3 from '../images/blog/Rodial-Box.jpg';
import image4 from '../images/Essentials/Penhaligons-Invitation.jpg';
import image5 from '../images/Packaging/Iconic-London.jpg';
import image6 from '../images/Packaging/Bare-Pro-Bare-Minerals.jpg';

const BlogPage = () => {

  let title = useRef(null);
  let list = useRef(null);
  let postslist = useRef(null);
  let feedList = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let hoverInElements = [title.current, list.current, postslist.current, feedList.current]
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

  const posts = [
    {
      type: 'post',
      title: 'Sure, your colour palette is important – but a vibrant planet is absolutely vital',
      image: image,
      date: 'NOVEMBER 24, 2021',
      to: '/blog/vibrant-planet/'
    },
    {
      type: 'post',
      title: 'The perfect package for Penhaligon’s fragrances',
      image: image2,
      date: 'NOVEMBER 24 , 2021',
      to: "/blog/penhaligons/"
    },
    {
      type: 'post',
      title: 'Thinking inside the box',
      image: image3,
      date: 'NOVEMBER 24 , 2021',
      to: "/blog/inside-the-box/"
    }
  ]

  return (
    <CustomScroll showOnLoad>
      {({loaded}) => 
        <Layout  loaded={loaded} footerMarginTop>
          <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title="Blog"
          />
          <section className="max-w-screen-xl mx-auto pt-32 md:pt-40 mb-16 md:mb-24 text-center px-8">
            <h1 ref={title} className="tracking-wide titleText splitAnimation text-fixed-3xl md:text-9xl lg:text-8xl 2xl:text-max-8xl leading-tight serif-font-medium fade-up opacity-0">Keeping you posted</h1>
          </section>
          {/* <section className="max-w-screen-xl mx-auto mb-8 md:mb-16 text-center px-8 w-full">
              <ul ref={list} className="blog-nav flex flex-wrap justify-center uppercase text-xl tracking-widest fade-up opacity-0 mx-auto">
                  <li>All</li>
                  <li>News</li>
                  <li>Inspiration</li>
                  <li>Posts</li>
                  <li>Instagram</li>
              </ul>
          </section> */}
          <div ref={postslist} className="flex flex-wrap mb-12 md:mb-20  fade-up opacity-0 ">
              {posts && posts.map((post, i) => (
                  post.type.replace(/\s/g, '').toLocaleLowerCase() === 'instagram' ? 
                  <div key={i} className="w-full md:w-1/3">
                    <InstagramPostSnippet text={post.text} author={post.author} date={post.date} />
                  </div>
                  :
                  <div key={i} className="w-full md:w-1/3">
                    <SinglePostSnippet link={post.to} image={post.image} title={post.title} date={post.date} />
                  </div>
              ))}
          </div>
          <div ref={feedList} className="fade-up opacity-0">
            <InstaFeed loaded={loaded} token="IGQVJYWXlpM2ZA5VVNFVk4tYXlpRlhhbjF0T1p4V1FNd2NwUGFOb2JJUVhXd0JXNTJJRGI5bVdUTENUM3MwTTVqc2stTVIxUDVPRk04RU81SEliSnJ0U201elMtRl92RlNERlMzVGRsNHBjRmZAPMF9DTwZDZD"/>
          </div>
        </Layout>
      }
    </CustomScroll>
  );
}

export default BlogPage;
