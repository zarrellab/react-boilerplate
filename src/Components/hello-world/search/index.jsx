import React from 'react'
import PropTypes from 'prop-types'


export default function Search({ className, value, onChange }) {
  return (
    <input
      className={className}
      name="search"
      type="text"
      placeholder="search..."
      value={value}
      onChange={onChange}
    />
  )
}

Search.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
