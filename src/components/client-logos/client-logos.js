import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import Glide from '@glidejs/glide'

import logo1 from '../../images/svgs/guerlain.svg';
import logo2 from '../../images/svgs/beauty-pie.svg';
import logo3 from '../../images/svgs/shiseido.svg';
import logo4 from '../../images/svgs/laura-mercier.svg';
import logo5 from '../../images/svgs/penhaligons.svg';
import logo6 from '../../images/svgs/bare-minerals.svg';
import logo7 from '../../images/svgs/hot-hair.svg';
import logo8 from '../../images/svgs/skinbrands.svg';
import logo9 from '../../images/svgs/morphe.svg';
import logo10 from '../../images/svgs/rodial.svg';
import logo11 from '../../images/svgs/lartisan.svg';
import logo12 from '../../images/svgs/feelunique.svg';
import logo13 from '../../images/svgs/conde-nast.svg';
import logo14 from '../../images/svgs/nars.svg';


const ClientLogos = ({pinkBG, marginBottom, noPaddingB}) => {
    let logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12,
        logo13,
        logo14
    ]
    let slider = useRef(null)
    useEffect(() => {
        if (!slider.current) return
        new Glide(slider.current, {
            type: 'carousel',
            autoplay: true,
            animationDuration: 2000,
            perView: 5,
            animationTimingFunc: 'linear',
            focusAt: 'center',
            breakpoints: {
                1800: {
                    perView: 4
                },
                1400: {
                    perView: 3
                  },
                900: {
                  perView: 2
                },
                560: {
                  perView:1
                }
            }
        }).mount()

    }, [slider])
    return (
    <div className={`text-center ${marginBottom ? ' md:mb-24' : 'mb-0'} ${pinkBG ? 'bg-pink-100' : 'bg-offWhite'} ${noPaddingB ? 'pt-12 md:pt-16' : 'py-12 md:pt-16 md:pb-20'}`}>
        <div className="w-full">
        <h3 className="text-fixed-2xl md:text-8xl lg:text-7xl 2xl:text-max-7xl serif-font-regular px-8">Our beautiful friends</h3>
        <p className="md:leading-loose max-w-6xl mx-auto mb-8 md:mb-16 md:text-lg px-8">Our long-standing clients trust us to do the best for them on every single job, and, they seem to enjoy working with us.</p>
        <div className="flex flex-wrap items-center justify-center">
            {logos && 
            <div ref={slider} className="glide">
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides flex flex-wrap items-center">
                        {logos.map((logo, i) => (
                            <li className="glide__slide" key={i}>
                                <img alt={`client Logo ${i}`} className="mx-auto" src={logo} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            }
        </div>
        </div>
    </div>
    )
}

ClientLogos.propTypes = {
    pinkBG: PropTypes.bool,
    marginBottom: PropTypes.bool,
    noPaddingB: PropTypes.bool
  };

export default ClientLogos;