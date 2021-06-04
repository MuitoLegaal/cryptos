import React from 'react';
import '../App.css';
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
import { useStyles } from "./styleSelectCurrencies"
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styleSelectCurrencies';
import TextField from '@material-ui/core/TextField';


function CoinsList(props) {

  const [search, setSearch] = React.useState('');
  const classes = useStyles();
  const getCoinData = async () => {
    await props.coinsRequestAction(props.currency)
  }
  const searchedCoins = searching(props.coins)

  function searching(coins) {
    return coins.filter((coin) =>
      (coin.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (coin.symbol || '').toLowerCase().includes(search.toLowerCase())
    );
  }

  console.log(props)

  React.useEffect(() => {
    getCoinData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (props.coins && props.coins.length > 0) {

    return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <SelectCurrency color='secondary' />
          <form className={classes.root} noValidate autoComplete="off" onChange={(e) => setSearch(e.target.value)}>
            <TextField id="standard-basic" label="Standard" />
          </form>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} size="medium">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell variant='body'>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell typography='body2' className='tabTitle' align="right">Price</TableCell>
                  <TableCell className='tabTitle' align="right">24h %</TableCell>
                  <TableCell className='tabTitle' align="right">7d %</TableCell>
                  <TableCell className='tabTitle' align="right">Market Cap</TableCell>
                  <TableCell className='tabTitle' align="right">Volume(24h)</TableCell>
                  <TableCell className='tabTitle' align="right">Circulating Supply</TableCell>
                </TableRow>
              </TableHead>
              <Coin searchedCoins={searchedCoins} />
            </Table>
          </TableContainer>
        </div>
      </ThemeProvider>
    )
  }

  else {
    return (<div className="containerLoading"><CircularProgress /></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins.data,
    currency: state.coins.currency
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ coinsRequestAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList)