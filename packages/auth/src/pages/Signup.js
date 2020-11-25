import React from 'react';
import { Avatar, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';

import {useStyles} from '../styles'
import { Copyright, CustomButton, CustomContainer, Form, GridContainer, GridItem, InputField, Text } from '../components';
import {LockOutlined } from '@material-ui/icons';


const Signup = ({onSignIn}) => {
  const classes = useStyles();

  return (
    <CustomContainer
      component="main"
      maxWidth="xs"
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Text 
          component="h1" 
          variant="h5" 
          textContent="Sign Up"
        />
        <Form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          noValidate
        >
          <GridContainer spacing={2}>
            <GridItem 
              xs={12} 
              sm={6}
            >
              <InputField 
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </GridItem>
            <GridItem 
              xs={12} 
              sm={6}
            >
              <InputField 
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </GridItem>
            <GridItem xs={12}>
              <InputField 
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </GridItem>
            <GridItem xs={12}>
              <InputField 
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </GridItem>
            <GridItem xs={12}>
              <FormControlLabel 
                control={
                  <Checkbox  
                    value="allowExtraEmails" 
                    color="primary" 
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </GridItem>
          </GridContainer>
          <CustomButton 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSignIn}
            buttonText="Sign Up"
          />
          <GridContainer justify="flex-end">
            <GridItem>
              <Link to="/auth/signin">Already have an account? Sign in</Link>
            </GridItem>
          </GridContainer>
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </CustomContainer>
  )
}

export default Signup