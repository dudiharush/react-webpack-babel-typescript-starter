import React from 'react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
  it('renders the inner Counter', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('p').text()).toEqual('Webpack + TypeScript + React = ❤️')
  })
})
