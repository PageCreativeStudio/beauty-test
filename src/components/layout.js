import React from "react";
import PropTypes from "prop-types";

import Footer from './footer';
import './layout.styles.scss'

function Layout({ children, noFooterBanner, footerMarginTop, loaded }) {

  return (
    <div>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        {children}
        <Footer loaded={loaded} marginTop={footerMarginTop} noBanner={noFooterBanner} />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooterBanner: PropTypes.bool,
  footerMarginTop: PropTypes.bool,
  loaded: PropTypes.bool,
};

export default Layout;
