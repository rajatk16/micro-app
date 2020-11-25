import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';

export const CustomButton = props => {
  return (
    <Button 
      type={props.type}
      fullWidth={props.fullWidth}
      variant={props.variant}
      color={props.color}
      className={props.className}
      onClick={props.onClick}
    >
      {props.buttonText}
    </Button>
  )
}

CustomButton.defaultProps = {
  type: 'button',
  fullWidth: false,
  variant: 'text',
  color: 'default',
  className: '',
  onClick: () => console.log("Clicked!"),
  buttonText: 'Click'
}

CustomButton.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string
}