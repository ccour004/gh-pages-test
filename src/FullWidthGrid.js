import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
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
});

class FullWidthGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state={files:[]}
  }
  
  render(){
    const {classes} = this.props;
    const {files} = this.state;
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
          {files.map((file)=>{
              return <Grid item xs={12}>
                  <Paper className={classes.paper}>{file.name}</Paper>
                  </Grid>
          })}
          </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(FullWidthGrid)