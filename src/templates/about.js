import React, {useEffect, useRef} from "react";
import { gsap, Power3 } from 'gsap';
import {graphql} from 'gatsby';
import { useAboutImages } from "../hooks/use-about-images";

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ClientLogos from '../components/client-logos/client-logos';
import ImgChanger from '../components/img-changer/img-changer';
import CtaBlock from '../components/cta-block/cta-block';
import Form from '../components/form/form';

import bg from '../images/Essentials/green-about.jpg'

const AboutPage = ({data}) => {
  const {page} = data;
  let title = useRef(null);
  let imageRef1 = useRef(null);
  let imageRef2 = useRef(null);
  let imageRef3 = useRef(null);
  let imageRef4 = useRef(null);
  let textRef1 = useRef(null);
  let textRef4 = useRef(null);
  let textRef5 = useRef(null);
  let textRef6 = useRef(null);
  let textRef7 = useRef(null);
  let textRef8 = useRef(null);
  let list1 = useRef(null);
  let ctaRef = useRef(null);


  useEffect(() => {
    let hoverInElements = [title.current, imageRef1.current, imageRef2.current, imageRef3.current,  imageRef4.current, textRef1.current, textRef4.current, textRef5.current, textRef6.current, textRef7.current, textRef8.current, list1.current, ctaRef.current]
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
  
  const {
    image1, image2, image3,
    image4, image5, image6,
    image7, image8, image9,
    image10, image11, image12
  } = useAboutImages()

  return (
    <CustomScroll showOnLoad>
      {({loaded}) => 
        <Layout loaded={loaded}>
          <SEO
            title={page.seo.title}
            description={page.seo.metaDescription ? page.seo.metaDescription.metaDescription : null}
            robots={page.seo.metaRobots}
            image={page.seo.image ? page.seo.image.localFile.url : null}
          />
          <div className="bg-pink-100">
            <section className="max-w-screen-2xl mx-auto pt-24 md:pt-40 mb-32 lg:mb-64 text-center px-8">
              <h1 ref={title} className="fade-up opacity-0 tracking-wide titleText splitAnimation text-fixed-2xl md:text-8xl 2xl:text-max-8xl leading-tight serif-font-regular">Bringing great experience, <i className="text-pink serif-font-regular-italic">passion</i> and a very specific <i className="text-pink serif-font-regular-italic">expertise</i> to leading beauty industry brands.</h1>
            </section>
          </div>
          <div className="relative px-8">
            <section className="max-w-6xl mx-auto w-full pb-8 pt-16 sm:py-16 lg:pt-24 lg:pt-16 xl:pt-40 xl:pb-32 flex flex-wrap relative">
              <div ref={imageRef1} className="fade-up opacity-0 lg:absolute mb-5 md:mb-10 lg:mb-0 mx-auto top-0 right-0 h-64 w-64 -mt-40 lg:-mr-24">
                <ImgChanger images={[image1.childImageSharp.fluid, image2.childImageSharp.fluid, image3.childImageSharp.fluid]} />
              </div>
              <div className="hidden lg:block lg:w-1/4">
                <div style={{height: '320px'}} ref={imageRef3} className="fade-up opacity-0 -mt-64 w-full">
                  <ImgChanger images={[image4.childImageSharp.fluid, image5.childImageSharp.fluid, image6.childImageSharp.fluid]} />
                </div>
              </div>
              <div className="w-full lg:w-3/4">
                <p ref={textRef7} className="fade-up opacity-0 text-center lg:text-left md:text-xl xl:text-2xl 2xl:text-max-2xl lg:pl-16 xl:pl-32 lg:ml-4 lg:pr-16 xl:pr-8">
                  PAGE BEAUTY is a unique blend of brilliant creatives, innovative print
                  production specialists and a geeky (but lovable) digital crew working solely
                  within the beauty market. We produce on-trend collateral, packaging, and
                  digital marketing strategies that tell your story, and make your brand desirable.
                </p>
              </div>
            </section>
            <section className="max-w-screen-2xl mx-auto text-center mb-8 sm:mb-16 xl:mb-24">
              <h2 ref={textRef6} className="fade-up opacity-0 tracking-wide titleText splitAnimation text-fixed-2xl md:text-8xl 2xl:text-max-8xl leading-tight serif-font-regular">…which brings us to you:</h2>
            </section>
            <div className="max-w-6xl mx-auto flex flex-wrap mb-8 sm:mb-16 xl:mb-40 items-center">
              <div className="w-full md:w-1/3 md:pr-8 lg:pr-24 mb-8 sm:mb-16 md:mb-0">
                <div ref={imageRef2} className="fade-up opacity-0 bottom-0 left-0 xl:ml-0 h-64 md:h-56 w-full z-10 ">
                  <ImgChanger images={[image7.childImageSharp.fluid, image8.childImageSharp.fluid, image9.childImageSharp.fluid]} />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 ref={textRef5} className="serif-font-regular fade-up opacity-0 xl:pl-12 text-center md:text-left tracking-wide text-xl md:text-6xl xl:text-5xl 2xl:text-max-5xl leading-tight">
                ...the enthusiastic and passionate
                professionals working hard in the
                fast-paced world that is the beauty
                business. You inspire us and fire us
                up to accomplish ever-more creative
                and effective work.
                </h2>
              </div>
            </div>
          </div>
          <section className="flex flex-wrap">
            <div className="w-full sm:w-1/2 flex flex-wrap flex-col justify-center items-center relative text-center px-8 py-16 md:py-40">
              <div style={{backgroundImage: `url(${bg})`}} className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
              <h3 ref={textRef8} className="fade-up opacity-0 tracking-wide text-xl md:xl:text-6xl xl:text-5xl 2xl:text-max-5xl leading-tight relative z-10 max-w-2xl serif-font-light-italic">
                “My life has beeen made so much easier by having a design and
                production partner that can handle anything and everything you
                throw at them, regardless of scale, timings or budget.” 
                <span className="mt-2 md:mt-5 block text-xl md:xl:text-5xl xl:text-4xl 2xl:text-max-3xl mb-10 md:mb-0">So could yours</span>
              </h3>
                <div ref={imageRef4} className="absolute center-image-about center-image-about__image fade-up opacity-0 h-32 md:h-56 w-40 md:w-64 -mb-16 sm:-mb-16 z-10">
                  <ImgChanger images={[image10.childImageSharp.fluid, image11.childImageSharp.fluid, image12.childImageSharp.fluid]} />
                </div>
            </div>
            <div className="w-full sm:w-1/2 bg-black-700 px-8 lg:pl-24 pt-32 md:pt-16 pb-16 lg:py-24 xl:py-32 text-center md:text-left flex flex-col justify-center">
              <div ref={list1} className="fade-up opacity-0 flex flex-wrap">
                <div className="w-full md:w-1/2 md:pr-8">
                  <h3 className="tracking-wide mb-5 md:mb-0 text-xl leading-tight text-white">We&apos;ve been specialising in all aspects of media for the Beauty sector for well over 30 years and it&apos;s something we&apos;ve been doing well. From design, to production, to delivery, we&apos;ve got your project covered.</h3>
                </div>
                <div className="pl-5 lg:pl-16 w-full md:w-1/2">
                  <ul className="md:list-disc font-light leading-loose">
                    <li className="text-white">Design and Artwork</li>
                    <li className="text-white">Production</li>
                    <li className="text-white">Influencer Mailers</li>
                    <li className="text-white">Packaging Design</li>
                    <li className="text-white">Marketing Materials</li>
                    <li className="text-white">Point of Sale materials</li>
                    <li className="text-white">Merchandise</li>
                    <li className="text-white">Press Releases</li>
                    <li className="text-white">PR Launch Materials</li>
                    <li className="text-white">Window Graphics</li>
                    <li className="text-white">Social Media Graphics</li>
                    <li className="text-white">Branding</li>
                    <li className="text-white">Websites</li>
                    <li className="text-white">…and more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section ref={textRef1} className="max-w-6xl mx-auto pt-10 sm:pt-32 md:pt-48 xl:pt-64 xl:mt-20 text-center px-8 fade-up opacity-0">
            <h2 className="tracking-wide titleText splitAnimation text-xl text-7xl lg:text-6xl 2xl:text-max-6xl leading-tight serif-font-medium md:-mb-12">
              You’ll see from these pages, we have
              been making pretty good headway with
              our mission to be the go-to guys for
              the entire beauty industry. <br/>
            </h2>
          </section>
          <div ref={ctaRef} className="fade-up opacity-0 md:mb-6">
            <CtaBlock />
          </div>
          <div ref={textRef4} className="fade-up opacity-0">
            <ClientLogos noPaddingB pinkBG />
          </div>
          {page.showContactForm && <Form loaded={loaded} pinkBG />}
        </Layout>
      }
    </CustomScroll>
  );
}

export default AboutPage;

export const query = graphql`
  query($id: String!) {
    page: contentfulPage(contentful_id: {eq: $id}) {
      title
      showContactForm
      seo {
        canonicalUrl
        title
        metaRobots
        metaDescription {
          metaDescription
        }
        image {
          localFile {
            url
          }
        }
      }
    }
  }
`
