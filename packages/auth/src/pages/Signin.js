import React from 'react';
import {Link} from 'react-router-dom';
import {LockOutlined} from '@material-ui/icons';
import {Avatar, FormControlLabel, Checkbox, Box} from '@material-ui/core';

import {useStyles} from '../styles'
import {
  Copyright, 
  CustomContainer, 
  Form, 
  Text, 
  InputField, 
  CustomButton, 
  GridContainer, 
  GridItem
} from '../components';

const SignIn = ({onSignIn}) => {
  const classes = useStyles();

  return (
    <CustomContainer>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Text 
          component="h1" 
          variant="h5" 
          textContent="Sign In"  
        />
        <Form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          noValidate
        >
        <InputField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <InputField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <FormControlLabel 
          control={
            <Checkbox 
              value="remember" 
              color="primary" 
              
            />
          }
          label="Remember Me"
        />
        <CustomButton 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSignIn}
          buttonText="Sign In"
        />
        <GridContainer>
          <GridItem>
            <Link to="/auth/signup">
              Don't have an account? Sign up
            </Link>
          </GridItem>
        </GridContainer>
        </Form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </CustomContainer>
  )
}

export default SignIn