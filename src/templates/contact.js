import React, {useEffect, useRef} from "react";
import {graphql} from 'gatsby'
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import BackgroundImage from "gatsby-background-image";

import { useContactImages } from "../hooks/use-contact-images";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CustomScroll from '../components/custom-scroll/custom-scroll';
import FormContact from "../components/form/form-contact";

const ContactPage = ({data}) => {
  const {page} = data
  
  let title = useRef(null);
  let subtitle = useRef(null);
  let form = useRef(null);
  let contact1 = useRef(null);
  let contact2 = useRef(null);
  let fromWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let hoverInElements = [title.current, subtitle.current, form.current,  contact1.current, contact2.current, fromWrapper.current]
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

  const { bg } = useContactImages();

  return (
    <CustomScroll showOnLoad >
      {({loaded}) => 
        <Layout loaded={loaded} noFooterBanner>
          <SEO
            title={page.seo.title}
            description={page.seo.metaDescription ? page.seo.metaDescription.metaDescription : null}
            robots={page.seo.metaRobots}
            image={page.seo.image ? page.seo.image.localFile.url : null}
          />
          <section className="max-w-screen-xl mx-auto pt-32 md:pt-40 mb-10 md:mb-32 text-center px-8">
            <h1 ref={title} className="tracking-wide titleText splitAnimation text-fixed-2xl md:text-8xl lg:text-7xl 2xl:text-max-7xl leading-tight serif-font-medium fade-up opacity-0 mb-5 md:mb-12">Want to grab all the attention?</h1>
            <h2 ref={subtitle} className="tracking-wide titleText splitAnimation text-xl leading-tight md:text-7xl lg:text-6xl 2xl:text-max-6xl serif-font-light fade-up opacity-0">Find out how our bespoke and <br/>
              personal approach can help you. <br/>Say <span className="serif-font-light-italic">‘Hello Beautiful!’</span> today</h2>
          </section>
          <section  ref={fromWrapper} className="flex flex-wrap mb-10 md:mb-20 lg:mb-32 fade-up opacity-0">
            <div className="w-full md:w-2/3 bg-pink-light px-8">
              <FormContact loaded={loaded} />
            </div>
            <div style={{backgroundImage: `url(${bg})`}} className="order-first md:order-last w-full md:w-1/3 bg-cover bg-center bg-no-repeat">
              <BackgroundImage 
                tag="div"
                fluid={bg.childImageSharp.fluid}
                className="w-full h-64 md:h-full"
              />
            </div>
          </section>
          <section ref={contact1} className="max-w-screen-xl mx-auto mb-5 md:mb-16 text-center px-8 fade-up opacity-0">
            <h2 className="tracking-wide titleText splitAnimation text-fixed-2xl md:text-8xl lg:text-7xl 2xl:text-max-7xl leading-tight mb-4 md:mb-8 serif-font-medium">Drop us a line.</h2>
            <a className="text-red-600 lg:text-3xl 2xl:text-max-3xl tracking-widest duration-300 hover:opacity-50" href="tel:+441268271858">
              +44 (0)1268 271 858
            </a>
          </section>
          <section ref={contact2} className="max-w-screen-xl mx-auto mb-10 md:mb-24 text-center px-8 fade-up opacity-0">
            <h2  className="tracking-wide titleText splitAnimation text-fixed-2xl md:text-8xl lg:text-7xl 2xl:text-max-7xl leading-tight mb-4 md:mb-8 serif-font-medium">Pop in and say <i className="text-pink serif-font-italic">hello</i>.</h2>
            <p className="text-red-600 lg:text-3xl 2xl:text-max-3xl tracking-widest">
            10 Progress Business Park,
            Progress Road <br/>
            Leigh-on-Sea,
            Essex, SS9 5PR

            </p>
          </section>
        </Layout>
      }
    </CustomScroll>
  );
}

export default ContactPage;

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