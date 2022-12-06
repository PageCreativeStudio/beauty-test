import React, { useEffect, useRef } from "react";
import {graphql} from 'gatsby'
import { gsap, Power3 } from 'gsap';

import { useHomepageImages } from "../hooks/use-hompage-images"
import { useBlogFeatured } from "../hooks/use-blog-featured";

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/index/hero';
import AboutSection from '../components/index/about-section';
import ServicesSlider from '../components/services-slider/services-slider';
import CtaBlock from '../components/cta-block/cta-block';
import BlogFeed from '../components/blog/blog-latest';
import Form from '../components/form/form';
import ClientLogos from '../components/client-logos/client-logos';

const IndexPage = ({data}) => {
  const {page} = data
  let clientsRef = useRef(null);
  let ctaRef = useRef(null);

  useEffect(() => {
    gsap.to('.fade__text--up', {
      x: 0, 
      y: 0, 
      opacity: 1, 
      duration: 1.5, 
      ease: Power3.easeInOut,
      stagger: 0.1
    } , 'slide')
  }, [])

  const { 
    slide1, slide2, slide3, slide4, slide5, slide6, slide7,
    aboutImage, aboutLogo,
    serviceImage1, serviceImage2, serviceImage3
  } = useHomepageImages();

  const { 
    image1, image2, image3
  } = useBlogFeatured();

  let heroImages = [
    slide1.childImageSharp.fluid,
    slide2.childImageSharp.fluid,
    slide3.childImageSharp.fluid,
    slide4.childImageSharp.fluid,
    slide5.childImageSharp.fluid,
    slide6.childImageSharp.fluid,
    slide7.childImageSharp.fluid
  ];

  const sliderInfo = [
    {
      title: <span>Influential <br/>Marketing</span>,
      text: 'Specialists in creating amazing and distinctive influencer mailers and collateral that will gain the maximum brand impact with your target influencers- or to put it succinctly – the WOW factor...',
      image: serviceImage1.childImageSharp.fluid,
      bgColour: '#d5e0d8',
      link: {
        text: 'More',
        to: '/influencer-marketing'
      }
    }, 
    {
      title: <span>Brand Essentials</span>,
      text: 'Concept, design and production for every little (or large) item that’s essential to successful marketing. From a bounce back card or launch invite to a time critical national point of sale campaign....',
      image: serviceImage2.childImageSharp.fluid,
      bgColour: '#e9e9e7',
      link: {
        text: 'More',
        to: '/essentials'
      }
    },
    {
      title: <span>Perfect Packaging</span>,
      text: 'The first impression of your product needs to be a memorable one. Page Beauty specialises in attention grabbing packaging design and we employ innovative production methods to make your cosmetics stand out....',
      image: serviceImage3.childImageSharp.fluid,
      bgColour: '#fef3f0',
      link: {
        text: 'More',
        to: '/packaging'
      }
    }
  ]
  return (
    <CustomScroll light showOnLoad>
      {({loaded, bodyScrollBar, scrollerReady}) => 
        <Layout loaded={loaded}>
          <SEO
            keywords={[`Beauty Packaging`, `Page Beauty`, `Beauty Packaging Essex`, `Beauty Packaging Design`]}
            title={page.seo.title}
            description={page.seo.metaDescription ? page.seo.metaDescription.metaDescription : null}
            robots={page.seo.metaRobots}
            image={page.seo.image ? page.seo.image.localFile.url : null}
          />
          <Hero images={heroImages} scrollerReady={scrollerReady} scroller={bodyScrollBar} />
          <AboutSection 
            introText="PAGE BEAUTY is a unique blend of brilliant creatives, innovative print production specialists and a geeky (but lovable) digital crew, working solely within the beauty market. We produce on-trend collateral, packaging, and digital assets that tell your story and make your brand desirable."   
            title={<span>
              About us?<br/>
              It&apos;s simple really.<br/>
              We&apos;re all  <i className="text-pink serif-font-regular-italic">about you</i>.
            </span>}
            image={aboutImage.childImageSharp.fluid} 
            quote={<p>
              “My life has been made so much easier by having
              a <span className="serif-font-bold">design</span> and <span className="serif-font-bold">production</span> partner that can handle
              anything and everything you throw at them,
              regardless of scale, timings or budget”.
            </p>}
            logo={aboutLogo.childImageSharp.fixed} loaded={loaded} 
          />
          <div ref={clientsRef} className="fade__text--up opacity-0">
            <ClientLogos />
          </div>
          <ServicesSlider sliderInfo={sliderInfo} scroller={bodyScrollBar} loaded={loaded} />
          <div ref={ctaRef} className="fade__text--up opacity-0">
            <CtaBlock />
          </div>
          <BlogFeed 
            loaded={loaded} 
            title={<span>
              Keeping <span className="serif-font-italic">you</span> posted
            </span>}
            blog1={{
              title: "Sure, your colour palette is important – but a vibrant planet is absolutely vital",
              image: image1.childImageSharp.fluid,
              link: "/blog/vibrant-planet/"
            }}
            blog2={{
              title: "The perfect package for Penhaligon’s fragrances",
              image: image2.childImageSharp.fluid,
              link: "/blog/penhaligons/"
            }}
            blog3={{
              title: "Thinking inside the box",
              image: image3.childImageSharp.fluid,
              link: "/blog/inside-the-box/"
            }}
          />
          {page.showContactForm && <Form loaded={loaded} />}
        </Layout>
      }
    </CustomScroll>
  )
}

export default IndexPage;


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