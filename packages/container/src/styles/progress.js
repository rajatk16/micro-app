import {makeStyles, createStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) =>  {
  return createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  })
})

