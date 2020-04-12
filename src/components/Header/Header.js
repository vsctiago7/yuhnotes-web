import React from 'react';
import { makeStyles, colors, Typography } from '@material-ui/core';

export const HEADER_HEIGHT = '60px';

const useStyles = makeStyles({
  header: {
    minHeight: HEADER_HEIGHT,
    backgroundColor: colors.deepPurple[400],
    boxShadow: `1px 1px 2px 2px ${colors.deepPurple[400]}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTitle: {
    fontFamily: 'Nunito',
    fontStyle: 'italic',
    color: 'white',
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography className={classes.logoTitle} variant="h4">Yuhnotes</Typography>
    </div>
  );
};

export default Header;
