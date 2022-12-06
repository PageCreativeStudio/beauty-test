import React from 'react';
import PropTypes from "prop-types";

const Quote = ({text, name, company}) => (
  <div>
    <h4 className="mb-6 text-xl sm:text-fixed-2xl md:text-4xl lg:text-4xl leading-10 xl:text-2xl 2xl:text-max-3xl serif-font-regular">{text}</h4>
    <span className="bg-black mb-6 block w-8 h-1"></span>
    <p className="text-base lg:text-lg tracking-wider"><b>{company}</b></p>
  </div>
);


Quote.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
};

export default Quote;