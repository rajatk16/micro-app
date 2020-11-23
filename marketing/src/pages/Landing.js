import React from 'react';
import {
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Grid, 
  Container
} from '@material-ui/core'
import {Link} from 'react-router-dom';

import {
  Text,
  Copyright,
  GridContainer,
  GridItem,
  CustomButton
} from '../components';

import useStyles from '../styles'

const cards = [1,2,3,4,5,6,7,8,9];

export default () => {
  const classes = useStyles();
  
  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Text 
              component="h1" 
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom={true}
              content="Home Page"
            />
            <Text 
              variant="h6" 
              align="center" 
              color="textSecondary" 
              paragraph={true} 
              content={
                `Something short and leading about the collection below; 
                its contents, the creator, etc. 
                Make it short and sweet, 
                but not too short so folks don't simply skip over it entirely
              `}
            />
            <div className={classes.heroButtons}>
              <GridContainer  
                spacing={2} 
                justify="center"
              >
                <GridItem>
                  <Link to="/pricing">
                    <CustomButton 
                      variant="contained" 
                      color="primary"
                      buttonText="Pricing"
                    /> 
                  </Link>
                </GridItem>
                <Grid item>
                  <Link to="/pricing">
                    <CustomButton
                      variant="outlined" 
                      color="primary"
                      buttonText="Pricing"
                    />
                  </Link>
                </Grid>
              </GridContainer>
            </div>
          </Container>
        </div>
        <Container 
          className={classes.cardGrid} 
          maxWidth="md"
        >
          <GridContainer spacing={4}>
            {cards.map((card) => (
              <GridItem 
                key={card} 
                xs={12} 
                sm={6} 
                md={4}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia} 
                    image="https://source.unsplash.com/random" 
                    title="Image title" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Text
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      content="Heading"
                    />
                    <Text 
                      content="This is a media card. You can use this section to describe the content."
                    />
                  </CardContent>
                  <CardActions>
                    <CustomButton 
                      size="small" 
                      color="primary" 
                      buttonText="View"   
                    />
                  </CardActions>
                  <CardActions>
                    <CustomButton 
                      size="small" 
                      color="primary" 
                      buttonText="Edit"   
                    />
                  </CardActions>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
         </Container>
      </main>
      <footer className={classes.footer}>
        <Text 
          variant="h6" 
          align="center" 
          gutterBottom
          content="Footer"
        />
        <Text
          variant="subtitle1" 
          align="center" 
          color="textSecondary" 
          component="p"
          content="Something here to give the footer a purpose!"
        />
        <Copyright />
      </footer>
    </>
  )
}