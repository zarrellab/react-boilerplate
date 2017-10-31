import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'

import App from '../Components'


const renderer = new ReactShallowRenderer()

describe('App', () => {
  it('should render without crashing', () => {
    renderer.render(
      <App />,
      document.getElementById('app'),
    )
  })
})
