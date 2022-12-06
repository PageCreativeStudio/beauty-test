import React, {useEffect, useState, useRef} from 'react';
import Glide from '@glidejs/glide';

import InstaImage from './insta-image';

import './insta-feed.styles.scss';

import icon from '../../images/next.svg';

const InstaFeed = ({token, loaded}) => {
  let [gallery, setGallery] = useState(null);
  let [loading, setLoading] = useState(true);
  const instaSlider = useRef(null);

  useEffect(() => {
    if(!token) return
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,images,media_type,thumbnail_url&access_token=${token}&limit=15`)
    .then(response => response.json())
    .then(data => 
      {
        setGallery(data.data)
        setLoading(false)
      })
    .catch(error => console.log(error))
  }, [token]);
  

  useEffect(() => {
    console.log(gallery, instaSlider)
    if (gallery && instaSlider.current) {
      let slider = new Glide(instaSlider.current,  { 
        type: 'carousel',
        startAt: 1,
        perView: 5,
        animationTimingFunc: 'ease-in-out',
        breakpoints: {
            767: { perView: 2 }
        }
      })
      slider.mount()    
    }
  }, [gallery, instaSlider, loading])

  return (
    <div className="w-full text-center mb-24 md:mb-16 lg:mb-12">
      {gallery && <h3 className="text-center text-xl md:text-6xl lg:text-5xl 2xl:text-max-5xl font-bold uppercase tracking-widest mb-5 md:mb-8 serif-font-regular">@PAGEBEAUTYUK</h3>}
      {!loading && gallery &&
        <div ref={instaSlider} className="glide relative">
          <div data-glide-el="track" className="glide__track">
            <ul className="glide__slides w-full text-center text-white text-3xl flex items-center justify-center px-3 md:px-4" >
              {gallery.map(image => 
                <InstaImage 
                  key={image.id} 
                  link={image.permalink} 
                  caption={image.caption}
                  isVideo={image.media_type}
                  videoTumbnail={image.thumbnail_url}
                  imageUrl={image.media_url}
                />)          
              }
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

export default InstaFeed;