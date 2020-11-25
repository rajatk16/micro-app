import React from 'react';
import { Link } from 'react-router-dom';

import {Text} from './index'

export const Copyright = () => {
  return (
    <Text 
      variant="body2"
      color="textSecondary"
      align="center"
    >
      <Link color="inherit" to="/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}.
    </Text>
  )
}
