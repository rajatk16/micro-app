import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

export const GridItem = props => {
  return (
    <Grid 
      item
      xs={props.xs}
      sm={props.sm}
      md={props.md}
    >
      {props.children}
    </Grid>
  )
}

GridItem.defaultProps = {
  xs: false,
  sm: false,
  md: false
}

GridItem.propsTypes = {
  xs: PropTypes.any,
  sm: PropTypes.any,
  md: PropTypes.any
}