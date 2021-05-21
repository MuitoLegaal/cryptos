import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { coinsRequestAction } from '../actions/actions';
import { formatNumber } from '../utils/logic/formatNumber';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function CurrenciesList(props) {
  const classes = useStyles();
  console.log(props.coins)
  // const [isLoading, setIsLoading] = React.useState(true);

  const getCoinData = async () => {
    await props.coinsRequestAction()
  }

  React.useEffect(() => {
    getCoinData()
    // setIsLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (props.coins && props.coins.length > 0) {

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Volume</TableCell>
              <TableCell align="right">Circulating Supply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.coins.map((coin, index) => (
              <TableRow key={coin.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {coin.name}
                </TableCell>
                <TableCell align="right">{formatNumber(coin.quote.USD.price)}</TableCell>
                <TableCell align="right">{formatNumber(coin.quote.USD.market_cap)}</TableCell>
                <TableCell align="right">{formatNumber(coin.quote.USD.volume_24h)}</TableCell>
                <TableCell align="right">{formatNumber(coin.circulating_supply)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  else {
    return (<div className="containerLoading"><CircularProgress /></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins.data
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ coinsRequestAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList)