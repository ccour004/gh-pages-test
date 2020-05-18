import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'margin-right': '40px',
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        {props.files.map((file)=>{
            return <Grid item xs={12}>
                <Paper className={classes.paper}>{file.name}</Paper>
                </Grid>
        })}
        </Grid>
      </div>
  );
}