import React from 'react';
import ItemComponent from './ItemComponent';
import AddItemComponent from './AddItemComponent';
import ReplaceComponent from './ReplaceComponent';
import DeleteComponent from './DeleteComponent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="center">
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6}>
        <ItemComponent />
        </Grid>
        <Grid item xs={6}>
        <AddItemComponent/>
        </Grid>
        <Grid item xs={6}>
        <ReplaceComponent/>
        </Grid>
        <Grid item xs={6}>
          <DeleteComponent/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
