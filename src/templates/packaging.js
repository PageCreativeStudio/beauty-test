import React, { useEffect } from "react";
import {graphql} from 'gatsby'
import { gsap, Power3 } from 'gsap';

import { usePackagingImages } from "../hooks/use-packaging-images";

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceIntro from '../components/service-intro/service-intro';
import FloatingImages from '../components/packaging/floating-images/floating-images';
import ClientLogos from '../components/client-logos/client-logos';
import CtaBlock from '../components/cta-block/cta-block';
import Form from '../components/form/form';

import image5 from '../images/penhaligons-gif.gif';
import image9 from '../images/Packaging/Penhaligons-Lipstick.gif';

const PackagingPage = ({data}) => {
  const {page} = data

  useEffect(() => {
    gsap.to('.fade__text--upSoft', {
      x: 0, 
      y: 0, 
      opacity: 1, 
      duration: 1.5, 
      ease: Power3.easeInOut,
      stagger: 0.1
    } , 'slide')    
  }, [])

  const {
    image1, image2, image3, image4,
    image6, image7, image8,
  } = usePackagingImages();

  return (
    <CustomScroll showOnLoad>
      {({loaded, bodyScrollBar}) => 
        <Layout loaded={loaded}>
          <SEO
            keywords={[`Packaging`, `Page Beauty`, `Beauty Packaging Essex`, `Beauty Packaging Design`]}
            title={page.seo.title}
            description={page.seo.metaDescription ? page.seo.metaDescription.metaDescription : null}
            robots={page.seo.metaRobots}
            image={page.seo.image ? page.seo.image.localFile.url : null}
          />
          <div style={{backgroundColor: '#fef3f0'}}>
            <ServiceIntro 
              scroller={bodyScrollBar}
              loaded={loaded}
              image={image1.childImageSharp.fluid} 
              title="Perfect Packaging"
              text={<span>Our customers demand contemporary
              packaging that makes a face cream a
              perennial must-have; helps a new lipstick
              jump off the shelf; that perfectly defines
              your brand personality. We’re on it.</span>}
              sub={<span>Consistently exceeding expectations with engaging bespoke packaging.
              Sustainable eco-production – designed with the planet in mind:</span>}
              list={[
                'Bespoke Presentation Packaging',
                'Ecommerce Boxes',
                'Product Cartons',
                'Bags & Tags',
                'Infuencer Mailers',
                'Branded Tissue',
                'Labels',
                'Product Printing',
              ]}
            />
            <FloatingImages 
              scroller={bodyScrollBar}
              loaded={loaded}  
              image1={image2.childImageSharp.fluid} 
              image2={image3.childImageSharp.fluid} 
              image3={image4.childImageSharp.fluid} 
              image4={image5}
              image5={image6.childImageSharp.fluid}
              image6={image7.childImageSharp.fluid}
              image7={image8.childImageSharp.fluid}
            />
            <img className="mx-auto" src={image9} />
          </div>
          <div className="bg-white">
            <CtaBlock />
          </div>
          <ClientLogos noPaddingB pinkBG />
          {page.showContactForm && <Form loaded={loaded} pinkBG />}
        </Layout>
      }
    </CustomScroll>
  );
}

export default PackagingPage;

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