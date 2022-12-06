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
            title="Privacy Policy"
          />
            <div className="blog mb-16 md:mb-24 pt-32 max-w-6xl mx-auto px-8">
                <p>This Privacy Policy / Notice sets out how PAGE Creative Limited / PAGE uses and protects any information that you provide when you use this website and contact forms. We may change this policy by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from&nbsp;30/04/18.</p>
                <p>PAGE Creative Limited / PAGE (Essex) Ltd are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified you can be assured that it will only be used in accordance with this privacy&nbsp;statement.</p>
                <h4>Information collected</h4>
                <p>We may collect the following&nbsp;information:</p>
                <ul>
                <li>Name</li>
                <li>Company (When Applicable)</li>
                <li>Telephone Number</li>
                <li>Email Address</li>
                </ul>
                <p>In general, you may visit the Site without telling us who you are or revealing any personally identifiable information about you. Our servers collect the domain names, operating system in use (e.g., Macintosh, Windows) and browser (e.g., Netscape, Internet Explorer). This information is aggregated to measure the number of visits, average time spent on the Site, pages viewed, etc. We use this information to measure the use of our Site and to improve the content of our Site. E-mail addresses and other personally identifiable information such as first and last name, telephone number, and other similar information are known only when voluntarily provided by a visitor for registration or other participation of visitors in any available online interactive&nbsp;activities.</p>
                <h4>Our Lawful Basis for what we do with the Data that you provide</h4>
                <p>We require this information in particular for the following&nbsp;reasons:</p>
                <ul>
                <li>Name, Address, Telephone Number and Email Address for billing and communication purposes.</li>
                <li>We require additional detail i.e. passwords, software license information etc. to help us resolve your technical issues.</li>
                <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided only if you have ‘Opted In’ providing your consent.</li>
                </ul>
                <h4>Disclosure of where data is stored</h4>
                <p>When processing your data we use the following Third&nbsp;Parties:</p>
                <ul>
                <li>Mailchimp</li>
                </ul>
                <h4>Your Rights to Controlling your Personal Information</h4>
                <ul>
                <li>You may choose to restrict the collection or use of your personal information, you have the following rights:</li>
                <li>The right to be informed</li>
                <li>The right to access</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object</li>
                <li>The right to be subject to automated decision-making including profiling</li>
                </ul>
                <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required to do so by law. You may request details of personal information which we hold about you under the GDPR (General Data Protection Regulation)&nbsp;2016.</p>
                <p>If you believe that any information we are holding on you is incorrect or incomplete, please advise us as soon as possible. We will promptly correct any information found to be&nbsp;incorrect.</p>
                <p>You may change your mind at any time by using the Unsubscribe link in the email received or if you require any further information email us at&nbsp;info@pagecreative.co.uk</p>
                <h4>Data Retention policy</h4>
                <p>Most of the data collected is used for accounting purposes, as such it is a HMRC requirement to hold records for 7 years.<br/>
                Any IT service data that is collected can be removed securely at your request subject to any contractual&nbsp;obligations.</p>
                <h4>Security</h4>
                <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. Should we find any evidence of a data breach we will notify you with&nbsp;72Hours.</p>
                <h4>Complaints</h4>
                <p>Should for any reason you wish to make a complaint about how PAGE have managed your data you can write to info@pagecreative.co.uk. Should you find that you are not happy with our response you can report your concern directly with the ICO at&nbsp;www.ico.org.uk</p>
                <h4>How we use Cookies</h4>
                <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your&nbsp;preferences.</p>
                <p>We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the&nbsp;system.</p>
                <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with&nbsp;us.</p>
                <h4>Links to other websites</h4>
                <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in&nbsp;question.</p>
            </div>
        </Layout>
      }
    </CustomScroll>
  );
}

export default Page;
