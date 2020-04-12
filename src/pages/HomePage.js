import React from 'react';
import Header, { HEADER_HEIGHT } from '../components/Header/Header';
import { makeStyles } from '@material-ui/core';
import NoteList from '../components/NoteList/NoteList';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    minHeight: `calc(100vh - ${HEADER_HEIGHT} - 20px)`,
  },
  textarea: {},
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <NoteList />
      </div>
    </div>
  );
};

export default HomePage;
