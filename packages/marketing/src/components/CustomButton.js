import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export const CustomButton = props => {
  return (
    <Button 
      variant={props.variant} 
      color={props.color}
      size={props.size}
    >
      {props.buttonText}
    </Button>
  )
}

CustomButton.defaultProps = {
  color: 'default',
  variant: 'text',
  buttonText: '',
  size: 'medium',
}

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}