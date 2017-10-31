import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from '^style/app.css'


export default function IconList({ icons, searchTerm }) {
  const searchFilter = search => item => (
    !search || item.props.alt.toLowerCase().includes(search.toLowerCase())
  )
  const listFilteredIcons = icons.filter(searchFilter(searchTerm)).map(icon =>
    <li id="icon" key={icon.props.alt} className={styles.iconLink}>{icon}</li>)
  const noResultsError = <h1>No Results</h1>
  const ifAny = list => ((list.length === 0) ? noResultsError : list)

  return (
    <ul id="icon-list" className={classNames(styles.center, styles.iconList)}>
      {ifAny(listFilteredIcons)}
    </ul>
  )
}

IconList.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
  searchTerm: PropTypes.string.isRequired,
}
