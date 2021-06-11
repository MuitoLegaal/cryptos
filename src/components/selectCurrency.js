import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { coinsRequestAction } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { useStyles } from "./styleSelectCurrencies";
import { lightTheme } from "./theme/lightTheme";
import { darkTheme } from "./theme/darkTheme";
import { ThemeProvider } from '@material-ui/styles';

function SelectCurrency(props) {
  const theme = props.dark ? { ...darkTheme } : { ...lightTheme };
  const classes = useStyles();

  const handleChange = async (event) => {
    handleCoinCall(event.target.value)
  };

  const handleCoinCall = async (currency) => {
    await props.coinsRequestAction(currency)
  }

  return (
    <ThemeProvider theme={theme}>
      <FormControl color='secondary' className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.currency}</InputLabel>
        <Select
          value={props.currency}
          onChange={handleChange}
        >
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"GBP"}>GBP</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.coins.currency
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ coinsRequestAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency)