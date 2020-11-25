import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export const Text = (props) => {
  return (
    <Typography 
      variant={props.variant}
      color={props.textSecondary}
      align={props.align}
      component={props.component}
    >
      {props.children || props.textContent}
    </Typography>
  )
}

Text.defaultProps = {
  variant: 'body1',
  color: 'initial',
  align: 'inherit',
  textContent: null
}

Text.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  textContent: PropTypes.string,
  component: PropTypes.elementType
}