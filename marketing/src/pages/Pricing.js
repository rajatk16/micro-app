import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {StarBorder as StarIcon} from '@material-ui/icons';
import {Button, Card, CardActions, CardContent, CardHeader, Link, Container, Box} from '@material-ui/core';

import useStyles from '../styles';
import {tiers, footers} from '../data';
import {Text, GridContainer, GridItem, Copyright} from '../components';

export default () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Text
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom          
          content="Pricing"
        />
        <Text
          component="p"
          variant="h5"
          align="center"
          color="textSecondary"
          content={`
            Quickly build an effective pricing table for your potential customers
            with this layout. It&apos;s built with default Material-UI components
            with little customization.
          `}
        />
      </Container>
      <Container maxWidth="md" component="main">
        <GridContainer spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <GridItem
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Text 
                      component="h2" 
                      variant="h3" 
                      color="textPrimary" 
                      content={`$${tier.price}`}
                    />
                    <Text 
                      variant="h6" 
                      color="textSecondary" 
                      content="/mo"
                    />
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Text
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        content={line}
                      />
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    fullWidth
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
      <Container 
        maxWidth="md" 
        component="footer" 
        className={classes.footer}
      >
        <GridContainer 
          spacing={4} 
          justify="space-evenly"
        >
          {footers.map((footer) => (
            <GridItem 
              xs={6} 
              sm={3} 
              key={footer.title}
            >
              <Text 
                variant="h6" 
                color="textPrimary" 
                gutterBottom
                content={footer.title}
              />
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </GridItem>
          ))}
        </GridContainer>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
