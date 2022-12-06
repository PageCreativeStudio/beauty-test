import React, { Component } from "react";
import {graphql} from 'gatsby'
import { gsap, Power3 } from 'gsap';

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/gallery/gallery";
import ClientLogos from '../components/client-logos/client-logos';
import CtaBlock from '../components/cta-block/cta-block';
import Form from '../components/form/form';

import image1 from '../images/PR/gallery/Bare-Minerals-The-Power-of-Good.jpg';
import image2 from '../images/PR/gallery/Bare-Pro-Bare-Minerals.jpg';
import image3 from '../images/PR/gallery/Beauty-Pie.jpg';
import image4 from '../images/PR/gallery/Buxom.jpg';
import image5 from '../images/PR/gallery/Buxom-Holographic-Lip-Polish.jpg';
import image6 from '../images/PR/gallery/Buxom-Plumpline-Lip-Liner.jpg';
import image7 from '../images/PR/gallery/Caviar-Volume-Panoramic-Mascara-1.jpg';
import image8 from '../images/PR/gallery/Dial-Up-The-Volume.jpg';
import image9 from '../images/PR/gallery/Feelunique-shot-1.jpg';
import image10 from '../images/PR/gallery/Feelunique-shot-2.jpg';
import image11 from '../images/PR/gallery/Hey-Like-Wow-RETOUCHED.jpg';
import image12 from '../images/PR/gallery/Iconic-London.jpg';
import image13 from '../images/PR/gallery/Laura-Mercier-Caviar-Chrome-Collection.jpg';
import image14 from '../images/PR/gallery/Lilliana.jpg';
import image15 from '../images/PR/gallery/Lipstick-Queen_retouched.jpg';
import image16 from '../images/PR/gallery/Max-Factor-Box-shot-1.jpg';
import image17 from '../images/PR/gallery/Max-Factor-Box-shot-2.jpg';
import image18 from '../images/PR/gallery/Max-Factor-Miracle-Touch-Foundation_retouched.jpg';
import image19 from '../images/PR/gallery/Molton-Brown-V2_Retouched.jpg';
import image20 from '../images/PR/gallery/Non-Stop-Matte_retouched.jpg';
import image21 from '../images/PR/gallery/QI-Energy-Beauty-Pie_retouched.jpg';
import image22 from '../images/PR/gallery/Radial_retouched.jpg';
import image23 from '../images/PR/gallery/Sleek-Make-Up_retouched.jpg';
import image24 from '../images/PR/gallery/Sleek-MakeUp-Radio-retouched.jpg';


import image25 from '../images/Essentials/gallery/Bare-Minerals.jpg';
import image26 from '../images/Essentials/gallery/Beauty-Pie-3-V2.jpg';
import image27 from '../images/Essentials/gallery/Beauty-Pie-Oxygen.jpg';
import image28 from '../images/Essentials/gallery/brompton.jpg';
import image29 from '../images/Essentials/gallery/Guerlain-5.jpg';
import image30 from '../images/Essentials/gallery/Guerlain-Aqua-Allegoria.jpg';
import image31 from '../images/Essentials/gallery/Klarna-V2.jpg';
import image32 from '../images/Essentials/gallery/Nip-&-Fab.jpg';
import image33 from '../images/Essentials/gallery/Penhaligon-Portrait-Cafe-Menu.jpg';
import image34 from '../images/Essentials/gallery/Penhaligons-Book.jpg';
import image35 from '../images/Essentials/gallery/Penhaligons-Certificate-of-Authentication-V2.jpg';
import image36 from '../images/Essentials/gallery/Penhaligons-Close-Up-1.jpg';
import image37 from '../images/Essentials/gallery/Penhaligons-Invitation.jpg';

import image38 from '../images/Packaging/gallery/Bare-Minerals-The-Power-of-Good.jpg';
import image39 from '../images/Packaging/gallery/Bare-Pro-Bare-Minerals.jpg';
import image40 from '../images/Packaging/gallery/Feel-Unique-Charlotte-Tilbury.jpg';
import image41 from '../images/Packaging/gallery/Iconic-London.jpg';
import image42 from '../images/Packaging/gallery/Ocean-Independance-Bag.jpg';
import image43 from '../images/Packaging/gallery/Ocean-Independance-Bag-Shot-2.jpg';
import image44 from '../images/Packaging/gallery/Paulas-Choice-Skincare.jpg';
import image45 from '../images/Packaging/gallery/Penhaligons.jpg';
import image46 from '../images/Packaging/gallery/Penhaligons-Luna-Eau-de-Toilette.jpg';
import image47 from '../images/Packaging/gallery/Penhaligons-Small-Sprays-1_retouched.jpg';
import image48 from '../images/Packaging/gallery/QI-Energy-Beauty-Pie.jpg';
import image50 from '../images/Packaging/gallery/Vitage-Boxes.jpg';

import image51 from '../images/gallery/GALLERY-1.jpg';
import image52 from '../images/gallery/GALLERY-2.jpg';
import image53 from '../images/gallery/GALLERY-3.jpg';
import image54 from '../images/gallery/GALLERY-4.jpg';
import image55 from '../images/gallery/GALLERY-5.jpg';
import image56 from '../images/gallery/GALLERY-6.jpg';
import image57 from '../images/gallery/GALLERY--7.jpg';

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.title = React.createRef();
    this.gallery1 = React.createRef();
    this.gallery2 = React.createRef();
    this.gallery3 = React.createRef();
    this.gallery4 = React.createRef();
    this.clientsRef = React.createRef();
    this.page = this.props.data.page
  }

  componentDidMount() {
      let hoverInElements = [this.title.current, this.gallery1.current, this.gallery2.current, this.gallery3.current,  this.gallery4.current, this.clientsRef.current]
      hoverInElements.forEach(el => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1, 
          duration: 1.5, 
          ease: Power3.easeOut,
        })
      })    
  }

  render() {
    return (
      <CustomScroll showOnLoad>
        {({loaded}) => 
          <Layout loaded={loaded}>
            <SEO
               title={this.page.seo.title}
               description={this.page.seo.metaDescription ? this.page.seo.metaDescription.metaDescription : null}
               robots={this.page.seo.metaRobots}
               image={this.page.seo.image ? this.page.seo.image.localFile.url : null}
            />
            <div className="bg-offWhite">
            <section ref={this.title} className="fade-up opacity-0 max-w-screen-xl mx-auto pt-32 md:pt-40 mb-24 md:mb-32 text-center">
              <h2 className="tracking-wide titleText splitAnimation text-fixed-3xl lg:text-9xl 2xl:text-max-9xl leading-tight serif-font-regular">Gallery</h2>
            </section>
            <div ref={this.gallery1} className="fade-up opacity-0">
              <Gallery 
                id="1"
                title="INFLUENTIAL MARKETING"
                images={[
                  image1,
                  image2,
                  image3,
                  image4,
                  image5,
                  image6,
                  image7,
                  image8,
                  image9,
                  image10,
                  image11,
                  image12,
                  image13,
                  image14,
                  image15,
                  image16,
                  image17,
                  image18,
                  image19,
                  image20,
                  image21,
                  image22,
                  image23,
                  image24
                ]}
              />
            </div>
            <div ref={this.gallery2} className="fade-up opacity-0">
              <Gallery 
                id="2"
                title="BRAND ESSENTIALS"
                images={[
                  image25,
                  image26,
                  image27,
                  image28,
                  image29,
                  image30,
                  image31,
                  image32,
                  image33,
                  image34,
                  image35,
                  image36,
                  image37
                ]}
              />
            </div>
            <div ref={this.gallery3} className="fade-up opacity-0">
              <Gallery 
                id="3"
                title="PERFECT PACKAGING"
                images={[
                  image38,
                  image39,
                  image40,
                  image41,
                  image42,
                  image43,
                  image44,
                  image45,
                  image46,
                  image47,
                  image48,
                  image50
                ]}
              />
            </div>
            <div ref={this.gallery4} className="fade-up opacity-0">
              <Gallery 
                id="4"
                title="AND MORE..."
                images={[
                  image51,
                  image52,
                  image53,
                  image54,
                  image55,
                  image56,
                  image57,
                ]}
              />
            </div>
            </div>
            <div className="bg-white">
                <CtaBlock />
              </div>
            <div ref={this.clientsRef} className="fade-up opacity-0">
              <ClientLogos noPaddingB />
            </div>
            {this.page.showContactForm && <Form loaded={loaded} />}
          </Layout>
        }
      </CustomScroll>
    );
  }
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