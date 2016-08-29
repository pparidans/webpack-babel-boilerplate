import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import App from '../../src/containers/app'

describe('App component', () => {
  it('render', () => {
    const renderer = createRenderer()
    renderer.render(<App/>)
    // TODO
  })
})
