import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core'

export const InputField = (props) => {
  return (
    <TextField 
      variant={props.variant}
      margin={props.margin}
      required={props.required}
      fullWidth={props.fullWidth}
      id={props.id}
      label={props.label}
      name={props.name}
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
    />
  )
}

InputField.defaultProps = {
  variant: 'standard',
  required: false,
  fullWidth: false
}

InputField.propTypes = {
  variant: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool
}