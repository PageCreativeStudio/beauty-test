import React, { useEffect, useRef } from "react";
import {graphql} from 'gatsby'
import {gsap, Power3 } from 'gsap';
import Img from 'gatsby-image';

import { useEssentialImages } from "../hooks/use-essential-images";

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceIntro from '../components/service-intro/service-intro';
import FloatingImages from '../components/essentials/floating-images/floating-images';
import FullImage from '../components/full-image/full-image';
import ClientLogos from '../components/client-logos/client-logos';
import CtaBlock from '../components/cta-block/cta-block';
import Form from '../components/form/form';

const EssentialPage = ({data}) => {
  const {page} = data

  const hero = useRef(null)

  const { 
    image1, image2, image3, image4,  image5,
    image6, image7, image8, image9,
    image10, image11,
  } = useEssentialImages();

  useEffect(() => {
    gsap.to(hero.current, {
      opacity: 1, 
      duration: 1.5, 
      ease: Power3.easeInOut,
      stagger: 0.1,
    })

    gsap.to('.fade__text--upSoft', {
      x: 0, 
      y: 0, 
      opacity: 1, 
      duration: 1.5, 
      ease: Power3.easeInOut,
      stagger: 0.1
    } , 'slide')

  }, [])

 
  return (
    <CustomScroll showOnLoad>
      {({loaded, bodyScrollBar}) => 
        <Layout loaded={loaded}>
            <SEO
              keywords={[`Essentials`, `Page Beauty`, `Beauty Packaging Essex`, `Beauty Packaging Design`]}
              title={page.seo.title}
              description={page.seo.metaDescription ? page.seo.metaDescription.metaDescription : null}
              robots={page.seo.metaRobots}
              image={page.seo.image ? page.seo.image.localFile.url : null}
            />
            <div className="bg-essentials">
            <div ref={hero} className="opacity-0">
              <FullImage scroller={bodyScrollBar} loaded={loaded} image={image1.childImageSharp.fluid}/>
            </div>
              <ServiceIntro 
                scroller={bodyScrollBar}
                loaded={loaded}
                noPadding
                image={image2.childImageSharp.fluid} 
                largeText
                title="Brand Essentials"
                text={<span>At Page Beauty, every project
                we collaborate on is unique and
                bespoke. To put it simply… we get
                the job done, and that, essentially,
                is the beauty of us.</span>}
                sub={<span>Vibrant, indispensable marketing tools produced on brand, on budget and on time,
                with no fuss:</span>}
                list={[
                  'Brochures',
                  'Marketing Material',
                  'Bounceback Cards',
                  'Stationery',
                  'In-store Graphics',
                  'Point of Sale',
                  'Email and Web Graphics',
                  'Props',
                  'Merchandising',
                  'Installations',
                ]}
              />
              <FloatingImages 
                scroller={bodyScrollBar}
                loaded={loaded}  
                image1={image4.childImageSharp.fluid} 
                image2={image6.childImageSharp.fluid} 
                image3={image5.childImageSharp.fluid} 
                image4={image3.childImageSharp.fluid}
                image5={image7.childImageSharp.fluid}
                image6={image8.childImageSharp.fluid}
                image7={image9.childImageSharp.fluid}
                image8={image11.childImageSharp.fluid}
              />
              <Img className="mx-auto w-full" fluid={image10.childImageSharp.fluid} />
            </div>
            <div className="bg-white">
              <CtaBlock />
            </div>
            <ClientLogos noPaddingB />
            {page.showContactForm && <Form loaded={loaded} />}
        </Layout>
      }
    </CustomScroll>
  );
}

export default EssentialPage;

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