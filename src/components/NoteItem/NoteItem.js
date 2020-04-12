import React, { useState } from 'react';
import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles({
  item: {
    display: 'block',
    boxSizing: 'border-box',
    overflow: 'hidden',
    resize: 'none',

    backgroundColor: colors.grey.A400,
    color: colors.common.white,
    width: '80%',
    margin: 'auto',
    marginTop: 5,
    padding: 5,
    border: 0,
    fontFamily: 'Prompt',
    fontWeight: 300,
    fontSize: 16,
  },
});

const NoteItem = ({ content }) => {
  const classes = useStyles();
  const minRows = 1;
  const [rows, setRows] = useState(1);
  const [value, setValue] = useState(content);

  const handleChange = (event) => {
    const textareaLineHeight = 24;

    const previousRows = event.target.rows;
    event.target.rows = minRows;

    const currentRows = Math.floor(
      event.target.scrollHeight / textareaLineHeight,
    );

    if (currentRows === previousRows) event.target.rows = currentRows;

    setValue(event.target.value);
    setRows(currentRows);
  };

  return (
    <textarea
      spellCheck={false}
      rows={rows}
      value={value}
      placeholder="New note..."
      className={classes.item}
      onChange={handleChange}
      autoFocus
    ></textarea>
  );
};

export default NoteItem;
