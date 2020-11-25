import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';

export const GridContainer = (props) => {
  return (
    <Grid 
      container
      spacing={props.spacing}
      justify={props.justify}
    >
      {props.children}
    </Grid>
  )
}

GridContainer.defaultProps = {
  spacing: 0,
  justify: 'flex-start'
}

GridContainer.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number,
  justify: PropTypes.string
}