import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

export const GridContainer = props => {
  return (
    <Grid 
      container 
      spacing={props.spacing} 
      justify={props.justify}
      alignItems={props.alignItems}
    >
      {props.children}
    </Grid>
  )
}

GridContainer.defaultProps = {
  spacing: 0,
  justify: 'flex-start',
  alignItems: 'stretch'
}

GridContainer.propTypes = {
  spacing: PropTypes.number,
  justify: PropTypes.string,
  children: PropTypes.node,
  alignItems: PropTypes.string
}