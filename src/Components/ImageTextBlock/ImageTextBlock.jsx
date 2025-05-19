import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../Heading/Heading'
import './ImageTextBlock.css'
import StripCard from '../StripCard/StripCard'

const ImageTextBlock = ({
  imgSrc,
  headingTitle,
  headingSubtitle,
  paragraph,
  stripIcon,
  stripTitle,
  supportPhone,
  stripPara,
  reverse = false,
  className = '',
  children
}) => {
  return (
    <div className={`image-text-block ${reverse ? 'reverse' : ''} ${className}`}>
      <div className="img-col">
        <img src={imgSrc} alt="Section visual" />
      </div>

      <div className="text-col">
        <Heading title={headingTitle} subtitle={headingSubtitle} />

        <p>{paragraph}</p>

        {children}
      </div>
    </div>
  )
}

export default ImageTextBlock
