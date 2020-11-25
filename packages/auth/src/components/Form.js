import React from 'react';
import PropTypes from 'prop-types';

export const Form = (props) => {
  return (
    <form 
      onSubmit={props.onSubmit} 
      className={props.className}
      noValidate={props.noValidate}
    >
      {props.children}
    </form>
  )
}

Form.defaultProps = {
  noValidate: false
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  noValidate: PropTypes.bool
}