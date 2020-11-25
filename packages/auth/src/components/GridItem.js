import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';

export const GridItem = (props) => {
  return (
    <Grid 
      item
      xs={props.xs}
      sm={props.sm}
    >
      {props.children}
    </Grid>
  )
}

GridItem.defaultProps = {
  xs: false,
  sm: false
}

GridItem.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.any,
  sm: PropTypes.any
}