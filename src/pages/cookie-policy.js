import React from "react";

import CustomScroll from '../components/custom-scroll/custom-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";

const Page = () => {

  return (
    <CustomScroll showOnLoad>
      { ({ loaded }) => 
        <Layout loaded={loaded}>
          <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title="Cookie Policy"
          />
            <div className="blog mb-16 md:mb-24 pt-32 max-w-6xl mx-auto px-8">
                <p>Cookies are files stored in your browser and are used by most websites to help personalise your web experience. Some features of this website will not function if you do not allow cookies or have cookies&nbsp;disabled.</p>
                <p>For the best experience using this site, we recommend using an up-to-date browser with JavaScript enabled and accept&nbsp;cookies.</p>
                <h4>Overall</h4>
                <p>This website makes use of essential session cookies to provide you the visitor with a service. We have automatically set a session cookie so you can use this website and service. If you do not want this cookie set, then please follow the link at the bottom of this page or manually delete the session cookie at any time by following the instructions in your&nbsp;browser.</p>
                <p>By continuing to use this website you give implied consent that we can store other cookies on your computer to provide you with this service.<br/>
                We will store some third party cookies to provide us with analytical data about who visits this website (anonymous visitor data, we cannot personally identify you), how they find us, and how long they use the site&nbsp;for.</p>
                <p>We do not use any information to track you, or personally identify you, we are only looking at summary data, always&nbsp;anonymous.</p>
                <h4><strong>Cookie information</strong></h4>
                <h4>Session cookie</h4>
                <p>We automatically set a session cookie in order for you to use this website or service. This session cookie is essential for the correct operation of this website and service. If the session cookie is not available, you may not be able to use some or all of the features of this website or&nbsp;service.</p>
                <p>The session cookie stores some basic information about your current status such as whether you are logged in and previous search information e.g. registration numbers and&nbsp;filters.</p>
                <p>A session cookie only lasts as long as your current browsing session and is typically removed or deleted by your browser when you stop using this website or service. You can manually delete your session cookie at any time by following the instructions in your&nbsp;browser.</p>
                <h4>Third-party cookies</h4>
                <p>This website makes use of Google Analytics. Google Analytics sets a cookie which allows us to view anonymous visitor data so we can improve this website or service to you. We typically make use of the overall visitor counts, the search parameters users used to find us and the amount of time a user spent on the site. You can manually delete this cookie at any time by following the instructions in your&nbsp;browser.</p>
                <h4>Background information</h4>
                <p>The 2003 Regulations implemented a European Directive – 2002/58/EC – which is concerned with the protection of privacy in the electronic communications sector. In 2009 this Directive was amended by Directive 2009/136/EC. This included a change to Article 5(3) of the E-Privacy Directive requiring consent for storage or access to information stored on a subscriber or users terminal equipment – in other words a requirement to obtain consent for cookies and similar&nbsp;technologies.</p>
            </div>
        </Layout>
      }
    </CustomScroll>
  );
}

export default Page;
