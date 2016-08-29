import React, { PropTypes } from 'react'

const Content = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired
}

export default Content
