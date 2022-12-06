import React, {useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import Scrollbar from 'smooth-scrollbar';

import Glide from '@glidejs/glide';
import SimpleLightbox from "simplelightbox";

import './gallery.style.scss';

import icon from '../../images/next.svg'

const Gallery = ({images, title, id}) => {
    let gallerySlider = useRef(null)
    let popupGallery = useRef(null)

    let updateLightBox = (lightbox, slider) => {
        lightbox.on('show.simplelightbox', function () {
            slider.disable()
         });
         lightbox.on('shown.simplelightbox', function () {      
            Scrollbar.init(document.querySelector('.sl-image'));
         }); 
         lightbox.on('changed.simplelightbox', function () {
            Scrollbar.destroy(document.querySelector('.sl-image'));
            Scrollbar.init(document.querySelector('.sl-image'));
         });
         lightbox.on('close.simplelightbox', () => {
             slider.enable()
             Scrollbar.destroy(document.querySelector('.sl-image'));
         })
    }

    useEffect(() => {
        if (gallerySlider) {
            let lightgallery = new SimpleLightbox(`.glide__slide--${id} a`, { 
                closeText: 'CLOSE', 
                showCounter: false, 
                heightRatio: 1,
                widthRatio: 1,
                disableScroll: true,
                docClose: false,
                focus: false,
                swipeClose: false,
                swipeTolerance: 80,
                navText: [
                    '<svg class="left-arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
                    '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
                ]
            });
            let slider = new Glide(gallerySlider.current,  { 
                type: 'carousel',
                startAt: 1,
                autoplay: 4000,
                animationDuration: 1000,
                perView: 4,
                animationTimingFunc: 'ease-in-out',
                breakpoints: {
                    767: { perView: 2 }
                }
            })
            slider.on('run.before', evt => {
                const scrollSteps = slider.settings.perView;
                evt.steps = evt.direction === '>' ? -scrollSteps : scrollSteps;
            });
            slider.on('run', () => {
                lightgallery.refresh()
                updateLightBox(lightgallery, slider)
            })
            slider.mount()

            
            updateLightBox(lightgallery, slider)

        }
    }, [])
      
    return (
        <div className="mb-32 lg:mb-40">
            {title && <h5 className="text-center text-xl md:text-6xl lg:text-5xl 2xl:text-max-5xl font-bold uppercase tracking-widest mb-5 md:mb-8 md:mb-20 serif-font-regular">{title}</h5>}
            {images &&
                <div ref={gallerySlider} className="glide relative">
                    <div data-glide-el="track" className="glide__track">
                        <ul ref={popupGallery} className={`glide__slides glide__slide--${id}`}>
                            {images.map((image, i) => (
                                <a  href={image} key={i} className="glide__slide">
                                        <div className="glide__slide-item relative overflow-hidden">
                                            <div style={{backgroundImage: `url(${image})`}} className="absolute inset-0 bg-cover bg-no-repeat bg-center"></div>
                                        </div>
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div className="glide__arrows relative lg:absolute flex justify-between h-0 px-10 mt-5 md:mt-0" data-glide-el="controls">
                        <div className="px-4 flex items-center cursor-pointer duration-300 hover:opacity-50 py-8 bg-white rounded-full" data-glide-dir="<">
                            <img style={{width: '32px', transform: 'rotate(180deg)'}} src={icon} />
                        </div>
                        <div className="px-4 flex items-center cursor-pointer duration-300 hover:opacity-50 py-8 bg-white rounded-full" data-glide-dir=">">
                            <img style={{width: '32px'}} src={icon} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

Gallery.propTypes = {
    title: PropTypes.string,
    images: PropTypes.array,
    id: PropTypes.string
};

export default Gallery;