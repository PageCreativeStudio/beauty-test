import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import BackgroundImage from 'gatsby-background-image';


const ImgChanger = ({images}) => {

  let [slideCount, setSlideCount] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideCount((prevCount) => {
        if (images.length - 1 === prevCount) return 1
        return prevCount + 1
      })
    }, 1500)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full h-full relative">
      {images.map((image, i) => (
        <div key={i} className={`absolute inset-0 ${slideCount == i ? 'opacity-0' : 'opacity-100'}`} >
          <BackgroundImage 
            tag="div"
            fluid={image}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  )
}

ImgChanger.propTypes = {
  images: PropTypes.array,
};

export default ImgChanger;