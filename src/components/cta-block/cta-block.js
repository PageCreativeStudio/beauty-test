import React from 'react';
import {Link} from 'gatsby';

const CtaBlock = () => (
    <div className="py-10 md:py-24 text-center px-8 ">
        <Link to="/contact" className="text-black inline-block md:text-lg lg:text-2xl 2xl:text-max-2xl tracking-widest border border-solid border-black py-4 md:py-5 px-16 duration-300 hover:bg-black hover:text-white">GET IN TOUCH</Link>
    </div>
);

export default CtaBlock;