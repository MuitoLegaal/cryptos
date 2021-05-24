import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { coinsRequestAction } from '../actions/actions';
import SelectCurrency from './selectCurrency';
import Coin from './coin';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function CoinsList(props) {
  const classes = useStyles();
  console.log(props.coins)

  const getCoinData = async () => {
    await props.coinsRequestAction()
  }

  React.useEffect(() => {
    getCoinData()
    // setIsLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (props.coins && props.coins.length > 0) {

    return (
      <div>
        <SelectCurrency />
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">24h %</TableCell>
                <TableCell align="right">7d %</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">Volume(24h)</TableCell>
                <TableCell align="right">Circulating Supply</TableCell>
              </TableRow>
            </TableHead>
              <Coin coins={props.coins} currency={"GBP"}/>
          </Table>
        </TableContainer>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList)