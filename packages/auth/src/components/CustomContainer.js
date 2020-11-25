import React from 'react';
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core';

export const CustomContainer = (props) => {
  return (
    <Container 
      component={props.component}
      maxWidth={props.maxWidth}
    >
      {props.children}
    </Container>
  )
}

CustomContainer.defaultProps = {
  component: 'div',
  maxWidth: 'lg'
}

CustomContainer.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  maxWidth: PropTypes.string || PropTypes.bool
}