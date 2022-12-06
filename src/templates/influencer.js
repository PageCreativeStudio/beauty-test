import React, { useEffect } from "react";
import {graphql} from 'gatsby'
import { gsap, Power3 } from 'gsap';
import {Link} from 'gatsby';

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceIntro from '../components/service-intro/service-intro';
import TopSection from '../components/pr/top-section/top-section';
import BottomSection from '../components/pr/bottom-section/bottom-section';
import ClientLogos from '../components/client-logos/client-logos';
import ImageFixedSlider from '../components/image-fixed-slider/image-fixed-slider';
import CtaBlock from '../components/cta-block/cta-block';
import Form from '../components/form/form';

import { useInfluencerImages } from "../hooks/use-influencer-images";

import image2 from '../images/sleek.gif';
import image5 from '../images/buxom.gif';

import slide1 from '../images/PR/scroll-slide/1.jpg';
import slide2 from '../images/PR/scroll-slide/2.jpg';
import slide3 from '../images/PR/scroll-slide/3.jpg';
import slide4 from '../images/PR/scroll-slide/4.jpg';
import slide5 from '../images/PR/scroll-slide/5.jpg';
import slide6 from '../images/PR/scroll-slide/6.jpg';
import slide7 from '../images/PR/scroll-slide/7.jpg';
import slide8 from '../images/PR/scroll-slide/8.jpg';
import slide9 from '../images/PR/scroll-slide/9.jpg';
import slide10 from '../images/PR/scroll-slide/10.jpg';
import slide11 from '../images/PR/scroll-slide/11.jpg';
import slide12 from '../images/PR/scroll-slide/12.jpg';
import slide13 from '../images/PR/scroll-slide/13.jpg';

const InfluencerPage = ({data}) => {
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
    image1, image3, image4, 
    image6, image7, image8, image9,
    image10, image11, image12, image13
  } = useInfluencerImages();
  return (
    <CustomScroll showOnLoad>
      {({loaded, bodyScrollBar}) => 
        <Layout loaded={loaded}>
          <SEO
            keywords={[`Influential`, `Page Beauty`, `Beauty Packaging Essex`, `Beauty Packaging Design`]}
            title={page.seo.title}
            description={page.seo.metaDescription ? page.seo.metaDescription.metaDescription : null}
            robots={page.seo.metaRobots}
            image={page.seo.image ? page.seo.image.localFile.url : null}
          />
          <div className="" style={{backgroundColor: '#d5e0d8'}}>
            <ServiceIntro 
              scroller={bodyScrollBar}
              loaded={loaded}
              image={image1.childImageSharp.fluid} 
              title="Influencer Marketing"
              text={<span>Influencers shape how consumers buy. So,
              to make that vital connection between your
              brand and the movers and shakers, we know the package needs to knock their socks off.
              Edgy, classic or fun – whatever the brand
              vibe – we create engagement and buzz.</span>}
              sub={<span>
                <b>Got an upcoming launch?</b> <Link className="underline" to="/contact">Call us</Link> to get a fresh take on how to really win friends
                and influence people:
              </span>}
              list={[
                'Box Mailers',
                'Press Releases',
                'Bespoke Presentation Packaging',
                'Email Campaigns',
                'Press Launch Graphics',
                'Merchandising',
                'Personalised Mailings'
              ]}
            />
            <TopSection 
              scroller={bodyScrollBar}
              loaded={loaded}  
              image1={image2} 
              image2={image3.childImageSharp.fluid} 
              image3={image4.childImageSharp.fluid} 
              image4={image5}
            />
            <ImageFixedSlider 
              images={[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13]} 
              bodyScrollBar={bodyScrollBar}
            />
            <BottomSection 
              scroller={bodyScrollBar}
              loaded={loaded}  
              image1={image6.childImageSharp.fluid} 
              image2={image7.childImageSharp.fluid} 
              image3={image8.childImageSharp.fluid} 
              image4={image9.childImageSharp.fluid} 
              image5={image10.childImageSharp.fluid} 
              image6={image11.childImageSharp.fluid} 
              image7={image12.childImageSharp.fluid} 
              image8={image13.childImageSharp.fluid} 
            />
            <div className="bg-white">
              <CtaBlock />
            </div>
          </div>
          <ClientLogos noPaddingB />
          {page.showContactForm && <Form loaded={loaded} />}
        </Layout>
      }
    </CustomScroll>
  );
}

export default InfluencerPage;

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