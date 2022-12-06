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
            title="Terms"
          />
            <div className="blog mb-16 md:mb-24 pt-32 max-w-6xl mx-auto px-8">
			<p>This website, www.pagebeauty.co.uk&nbsp;(the “Site”), and all personal information collected from users of this site, is owned solely by “Page Creative Limited”. In these Website Terms references to “we”, “us”, “our”, are references to “Page Creative&nbsp;Limited”.</p>
            <h4>1. Agreement</h4>
            <p>By accessing, using, browsing or booking on this site you agree that you have read, understood and agree to be bound by these Terms of Use and you agree to comply with all applicable laws, rules and regulations. Nothing in this site shall constitute an offer to supply goods or&nbsp;services.</p>
            <h4>2. Changes to Site</h4>
            <p>Further, we may change this Site at any time without notice by adding or removing features or services. This will be without liability to you. We do not warrant that the information accessible via this Site is accurate and assumes no duty to update such information. We do not accept liability for any errors or omissions. We use its best endeavours to ensure that information contained in this website is accurate and not&nbsp;misleading.</p>
            <h4>3. Law and Jurisdiction</h4>
            <p>This contract is subject to the law of England and Wales. All disputes arising out of this contract shall be subject to the exclusive jurisdiction of the courts of England and Wales. Those who access the site from other locations are responsible for compliance with their local laws and taxes as applicable. Any disputes not resolved by normal complaints procedure will be resolved exclusively in the courts of England and Wales under English&nbsp;Law.</p>
            <h4>4. Data Privacy</h4>
            <p>We have a privacy statement for all clients. All personal details that you give us are securely stored. We do not supply or sell customers details to any outside organisation. We will endeavour to take all reasonable care, in so far as it is possible to do so, to keep all details of any orders and payments secure, but, in the absence of negligence on our part we cannot be held liable for any loss you may suffer if a third party procures unauthorised access to any data you provide when accessing or&nbsp;ordering.</p>
            <h4>5. Conditions of Use – Copyright</h4>
            <p>You may save and print individual items included on this Site. However this must be for your personal, non-commercial use only. You may also send selected individual items to other users of the site or your friends or work colleagues provided that they only use them for their own personal, non-commercial use. Any other onward distribution or further publication is&nbsp;prohibited.</p>
            <h4>6. Links</h4>
            <p>Any links featured on this Site have been included for your convenience only. The inclusion of a link does not imply that we endorse or accept any responsibility for the linked site, its content or its provider. Access to a linked site will be subject to that sites own terms and conditions, to which you should&nbsp;refer.</p>
            <h4>7. Further Details</h4>
            <p>For any further details about our website terms of use please e-mail<a href="mailto:studio@pagecreative.co.uk"> studio@pagecreative.co.uk</a>&nbsp;Please note we reserve the right to change these terms of use with any changes being posted onto this&nbsp;page.</p>
            </div>
        </Layout>
      }
    </CustomScroll>
  );
}

export default Page;
