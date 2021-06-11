import React from 'react';
import '../App.css';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BackgroundThemeButton from './backgroundThemeButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { coinsRequestAction } from '../actions/actions';
import SelectCurrency from './selectCurrency';
import Coin from './coin';
import { useStyles, theme } from "./styleSelectCurrencies"
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { TableBody } from '@material-ui/core';
import WatchlistButton from './watchListButton';
import PortfolioButton from './portfolioButton';
import { sorted } from '../utils/logic/sortingConditions';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

function CoinsList(props) {

  const [search, setSearch] = React.useState('');
  const [sorting, setSorting] = React.useState('IndexUp');
  const classes = useStyles();
  const searchedCoins = searching(props.coins);
  let generateCoin
  let sortedCoins = searchedCoins
  let triangleName
  let trianglePrice
  let triangleIndex
  let triangle24h
  let triangle7d
  let triangleMarketCap
  let triangleVolume
  let triangleCirculatingSupply

  console.log(props)

  const getCoinData = async () => {
    await props.coinsRequestAction(props.currency)
  }

  function searching(coins) {
    return coins.filter((coin) =>
      (coin.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (coin.symbol || '').toLowerCase().includes(search.toLowerCase())
    );
  }

  function handleClickName() {
    if (sorting !== 'NameDown') {
      setSorting('NameDown')
    }
    else if (sorting === 'NameDown') {
      setSorting('NameUp')
    }
  }

  function handleClickPrice() {
    if (sorting !== 'PriceDown') {
      setSorting('PriceDown')
    }
    else if (sorting === 'PriceDown') {
      setSorting('PriceUp')
    }
  }

  function handleClickIndex() {
    if (sorting !== 'IndexDown') {
      setSorting('IndexDown')
    }
    else if (sorting === 'IndexDown') {
      setSorting('IndexUp')
    }
  }

  function handleClick7d() {
    if (sorting !== '7dDown') {
      setSorting('7dDown')
    }
    else if (sorting === '7dDown') {
      setSorting('7dUp')
    }
  }

  function handleClick24h() {
    if (sorting !== '24hDown') {
      setSorting('24hDown')
    }
    else if (sorting === '24hDown') {
      setSorting('24hUp')
    }
  }

  function handleClickMarketCap() {
    if (sorting !== 'MarketCapDown') {
      setSorting('MarketCapDown')
    }
    else if (sorting === 'MarketCapDown') {
      setSorting('MarketCapUp')
    }
  }

  function handleClickVolume() {
    if (sorting !== 'VolumeDown') {
      setSorting('VolumeDown')
    }
    else if (sorting === 'VolumeDown') {
      setSorting('VolumeUp')
    }
  }

  function handleClickCirculatingSupply() {
    if (sorting !== 'CirculatingSupplyDown') {
      setSorting('CirculatingSupplyDown')
    }
    else if (sorting === 'CirculatingSupplyDown') {
      setSorting('CirculatingSupplyUp')
    }
  }

  sortedCoins = sorted(sorting, searchedCoins, props.currency)
  if (sorting === 'IndexUp') {
    triangleIndex = <VscTriangleUp />
  }
  else if (sorting === 'IndexDown') {
    triangleIndex = <VscTriangleDown />
  }
  else if (sorting === 'NameUp') {
    triangleName = <VscTriangleUp />
  }
  else if (sorting === 'NameDown') {
    triangleName = <VscTriangleDown />
  }
  else if (sorting === 'PriceUp') {
    trianglePrice = <VscTriangleUp />
  }
  else if (sorting === 'PriceDown') {
    trianglePrice = <VscTriangleDown />
  }
  else if (sorting === '24hDown') {
    triangle24h = <VscTriangleDown />
  }
  else if (sorting === '24hUp') {
    triangle24h = <VscTriangleUp />
  }
  else if (sorting === '7dDown') {
    triangle7d = <VscTriangleDown />
  }
  else if (sorting === '7dUp') {
    triangle7d = <VscTriangleUp />
  }
  else if (sorting === 'MarketCapDown') {
    triangleMarketCap = <VscTriangleDown />
  }
  else if (sorting === 'MarketCapUp') {
    triangleMarketCap = <VscTriangleUp />
  }
  else if (sorting === 'VolumeDown') {
    triangleVolume = <VscTriangleDown />
  }
  else if (sorting === 'VolumeUp') {
    triangleVolume = <VscTriangleUp />
  }
  else if (sorting === 'CirculatingSupplyDown') {
    triangleCirculatingSupply = <VscTriangleDown />
  }
  else if (sorting === 'CirculatingSupplyUp') {
    triangleCirculatingSupply = <VscTriangleUp />
  }

  React.useEffect(() => {
    getCoinData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  if (props.coins && props.coins.length > 0 && props.coins[0].quote.USD) {
    generateCoin = () => {
      return (
        sortedCoins.map((data) => (
          <Coin key={data.name} rank={data.cmc_rank} coin={data} currencyData={data.quote.USD} fiatSymbol='$' />
        ))
      )
    }
  }

  else if (props.coins && props.coins.length > 0 && props.coins[0].quote.EUR) {
    generateCoin = () => {
      return (
        sortedCoins.map((data) => (
          <Coin key={data.name} rank={data.cmc_rank} coin={data} currencyData={data.quote.EUR} fiatSymbol='€' />
        ))
      )
    }
  }

  else if (props.coins && props.coins.length > 0 && props.coins[0].quote.GBP) {
    generateCoin = () => {
      return (
        sortedCoins.map((data) => (
          <Coin key={data.name} rank={data.cmc_rank} coin={data} currencyData={data.quote.GBP} fiatSymbol='£' />
        ))
      )
    }
  }

  if (props.coins && props.coins.length > 0) {

    return (
      <ThemeProvider className='containerList' theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <WatchlistButton />
          <PortfolioButton />
          <SelectCurrency color='secondary' />
          <form className={classes.root} noValidate autoComplete="off" onChange={(e) => setSearch(e.target.value)}>
            <TextField id="standard-basic" label="Search" />
          </form>
          <BackgroundThemeButton />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell onClick={handleClickIndex} className='tabTitle'>#{triangleIndex}</TableCell>
                  <TableCell onClick={handleClickName} className='tabTitle'>Name{triangleName}</TableCell>
                  <TableCell onClick={handleClickPrice} className='tabTitle' align="right">Price{trianglePrice}</TableCell>
                  <TableCell onClick={handleClick24h} className='tabTitle' align="right">{triangle24h}24h %</TableCell>
                  <TableCell onClick={handleClick7d} className='tabTitle' align="right">{triangle7d}7d %</TableCell>
                  <TableCell onClick={handleClickMarketCap} className='tabTitle' align="right">{triangleMarketCap}Market Cap</TableCell>
                  <TableCell onClick={handleClickVolume} className='tabTitle' align="right">{triangleVolume}Volume(24h)</TableCell>
                  <TableCell onClick={handleClickCirculatingSupply} className='tabTitle' align="right">{triangleCirculatingSupply}Circulating Supply</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {generateCoin()}
              </TableBody>
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
    currency: state.coins.currency,
    blackTheme: state.coins.theme
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ coinsRequestAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList)