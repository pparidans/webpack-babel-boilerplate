import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import Content from '../../src/components/content'

describe('Content component', () => {
  it('render', () => {
    const renderer = createRenderer()
    renderer.render(<Content title="Hello World"/>)
    // TODO
  })
})
