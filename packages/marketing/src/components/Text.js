import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export const Text = (props) => {
  return (
    <Typography
      component={props.component}
      variant={props.variant}
      align={props.align}
      color={props.color}
      gutterBottom={props.gutterBottom}
      paragraph={props.paragraph}
    >
      {props.content}
    </Typography>
  )
}

Text.defaultProps = {
  variant: 'body1',
  align: 'inherit',
  color: 'initial',
  gutterBottom: false,
  content: '',
  paragraph: false
}

Text.propTypes = {
  component: PropTypes.any,
  variant: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  gutterBottom: PropTypes.bool,
  content: PropTypes.string,
  paragraph: PropTypes.bool
}