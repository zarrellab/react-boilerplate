import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import HelloWorld from '..'


describe('HelloWorld component', () => {
  it('should render a greeting', () => {
    expect.assertions(1)
    const component = renderer.create(<HelloWorld />)
    return expect(component.toJSON()).toMatchSnapshot()
  })

  describe('search', () => {
    it('should save a search term to state', () => {
      expect.assertions(1)
      const component = mount(<HelloWorld />)
      const value = 'r'

      component.find('input').simulate('change', { target: { value } })
      return expect(component.state().searchTerm).toBe(value)
    })
  })
})
