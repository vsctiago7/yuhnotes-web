import React from 'react';
import './App.css';
import HomePage from '../../pages/HomePage';
import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: colors.grey[900]
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomePage  />
    </div>
  );
};

export default App;
