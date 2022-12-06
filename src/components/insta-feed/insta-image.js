import React from 'react';
import PropTypes from 'prop-types';

const InstaImage = ({ link, caption, isVideo, videoTumbnail, imageUrl}) => {
    const imageRef = isVideo === "VIDEO" ? videoTumbnail : imageUrl
    const trimmedString = caption ? caption.substr(0, 100) : null
    const excerpt = trimmedString ? trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + ' .... Read More' : null
    return (
        <div className="glide__slide w-full md:w-1/5 flex-shrink-0 px-3 md:px-4 mb-6 md:mb-8">
            <a  rel="noreferrer" target="_blank" href={link}>
                <div className="instaimage relative flex flex-wrap items-center overflow-hidden">
                    <div style={{backgroundImage: `url(${imageRef})`}} className="instaimage__image duration-300 absolute inset-0 bg-cover bg-no-repeat bg-center"/>
                    <div className="instaimage__bg absolute inset-0 bg-primary opacity-0 duration-300"/>
                    <p className="instaimage__text relative text-sm px-4 opacity-0 duration-300">{excerpt}</p>
                </div>   
            </a>
        </div>
    );
}


InstaImage.propTypes = {
    link: PropTypes.string,
    caption: PropTypes.string,
    isVideo: PropTypes.string,
    videoTumbnail: PropTypes.string,
    imageUrl: PropTypes.string
}

export default InstaImage;