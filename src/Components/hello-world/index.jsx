import React from 'react'

import styles from '^style/app.css'
import reactImg from '^images/icons/react.svg'
import babelImg from '^images/icons/babel.svg'
import jestImg from '^images/icons/jest.svg'
import webpackImg from '^images/icons/webpack.svg'
import seleniumImg from '^images/icons/selenium.png'
import eslintImg from '^images/icons/eslint.svg'

import Search from './search'
import IconLink from './icon-link'
import IconList from './icon-list'


class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      icons: [
        <IconLink link="https://facebook.github.io/react/" image={reactImg} alt="react" />,
        <IconLink link="http://babeljs.io/" image={babelImg} alt="babel" />,
        <IconLink link="https://facebook.github.io/jest/" image={jestImg} alt="jest" />,
        <IconLink link="https://webpack.github.io/docs/" image={webpackImg} alt="webpack" />,
        <IconLink link="http://www.seleniumhq.org/" image={seleniumImg} alt="selenium" />,
        <IconLink link="https://eslint.org/" image={eslintImg} alt="eslint" />,
      ],
      searchTerm: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render() {
    const { icons, searchTerm } = this.state
    return (
      <div className={styles.center} id="hello-world">
        <h1>Welcome to your react app!</h1>
        <h3>Here are some tools setup to use:</h3>
        <Search
          className={styles.search}
          value={searchTerm}
          onChange={e => this.handleSearchChange(e)}
        />
        <IconList icons={icons} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default HelloWorld
