import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectCurrency() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{currency}</InputLabel>
        <Select
          value={currency}
          onChange={handleChange}
        >
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"GBP"}>GBP</MenuItem>
        </Select>
      </FormControl>
  );
}