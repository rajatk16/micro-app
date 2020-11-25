import React from 'react';
import {LinearProgress} from '@material-ui/core';

import {useStyles} from '../styles/progress';

export const Progress = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  )
}

