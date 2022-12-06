import React, {useEffect, useRef} from "react";
import { gsap, Power3 } from 'gsap';
import {Link} from "gatsby"

import CustomScroll from '../../components/custom-scroll/custom-scroll';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeroImage from '../../components/blog/hero-image';

import image from '../../images/blog/Rodial-Box.jpg';
import image2 from '../../images/blog/iphone-mockups.jpg';
import image3 from '../../images/blog/Youtubers.jpg';
import image4 from '../../images/blog/Hey-Like-Wow.jpg';


const Post = () => {

  let title = useRef(null);
  let bgImageWrapper = useRef(null);
  let text = useRef(null);
  let postimage = useRef(null);


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
        <Layout loaded={loaded}>
          <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title="Penhaligon’s fragrances"
          />
          <div className="bg-offWhite mb-16 md:mb-24">
            <div ref={bgImageWrapper} className="fade-up opacity-0">
              <HeroImage image={image} bodyScrollBar={bodyScrollBar} />
            </div>
            <section className="max-w-6xl mx-auto px-8 pb-16 md:pb-24">
              <h1 ref={title} className="tracking-wide titleText splitAnimation text-fixed-3xl md:text-7xl lg:text-6xl leading-tight serif-font-light fade-up opacity-0 mb-4 md:mb-8 md:mb-0">Thinking inside the box</h1>
              <div ref={text} className="fade-up opacity-0 mb-10">
                <h3 className="text-fixed-2xl md:text-5xl lg:text-4xl mb-10">Press boxes are not necessarily new in the beauty industry, but they have never been more in than now.</h3>
                <p className="text-xl mb-10">
                  These little packages are filled with goodies for makeup, skin, and haircare lovers from all over the world, but why do people love them so much? What kind of benefits do these boxes bring for brands?
                </p>
                <img className="mx-auto mb-10" src={image2} />
                <h3 className="text-fixed-2xl md:text-5xl lg:text-4xl mb-10">3 Reasons to love beauty boxes</h3>
                <h4 className="text-xl mb-5">1. TEST PRODUCTS BEFORE THEY’RE OUT</h4>
                <p className="text-xl mb-10">
                  For any makeup fans or influencers out there, press boxes mean getting your hands on products before official release.
                  <br/><br/>
                  Being able to test the products makes it possible to deliver early reviews (which helps influencers remain credible and on-trend) and allows users to find out whether the items work for them and are worth the investment.
                  <br/><br/>
                  Marketers, brands, and beauty businesses take advantage of this by sending bloggers and influencers press boxes earlier, so they can feature them on their social media platforms, creating a buzz online.
                </p>
                <img className="mx-auto mb-10" src={image3} />
                <p className="text-xl mb-10">
                  However, even though this creates visibility for the brands to the many followers that each influencer brings, it can be a risky move. Bloggers have a reputation to maintain and, therefore, the products have to be great to avoid generating bad reviews.
                </p>
                <img className="mx-auto mb-10" src={image} />
                <h4 className="text-xl mb-5">2. GET PRODUCTS THAT ARE RIGHT FOR THE USER</h4>
                <p className="text-xl mb-10">
                  The best beauty boxes include products specifically picked for each user’s needs.
                  <br/><br/>
                  Both influencers and regular customers appreciate it more when items match their skin tone or the colour/texture of their hair and are as personalised as possible (it doesn’t hurt if the box comes with a ​handwritten thank you note​!)
                  <br/><br/>
                  Although creating customised boxes requires more time and effort for brands, in the end, the response will be worth it. Customers love it when a business takes its time trying to get to know them, it helps make them feel important.
                  <br/><br/>
                  Beauty companies can make the most of customised boxes by asking prospects to participate in surveys to find out exactly what kind of products they are hoping to get, based on their own unique, individual features.
                </p>
                <img className="mx-auto mb-10" src={image4} />
                <h4 className="text-xl mb-5">3. GLOBAL SHIPPING</h4>
                <p className="text-xl mb-16 md:mb-24">
                  It doesn’t matter where in the world you live, you can get your press box anywhere (sooner or later), sometimes even for free, if you subscribe to the right service.
                  <br/><br/>
                  Furthermore, users get to decide if they want the box to be a one-time deal or if they’d like to have products knocking at their door every month.
                  <br/><br/>
                  Beauty boxes can also be sent as a gift for a special occasions such as birthdays, Christmas or anniversaries, making them a great choice for a present.
                  <br/><br/>
                  Being able to send goodies to every continent allows brands to reach a larger demographic and to raise their brand profile globally.
                  <br/><br/>
                  However, ensuring the products arrive in time can pose a challenge. Brands need to invest in a good shipping company whilst making sure that each item will meet the user’s expectations and be worth the wait.
                  <br/><br/>
                  That is why when handled correctly in terms of presentation, quality, and delivery press boxes are here to stay!
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
