import React from 'react'
import PropTypes from 'prop-types'


export default function IconLink({ link, image, alt }) {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <img src={image} height="100" width="100" alt={alt} />
    </a>
  )
}

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
