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
import { useStyles, theme } from "./styleSelectCurrencies"
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { TableBody } from '@material-ui/core';
import { sortByName, sortByPrice, sortBySupply, sortBy24h, sortBy7d, sortByMarketCap, sortByVolume } from '../utils/logic/sortedArray';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';


function CoinsList(props) {

  const [search, setSearch] = React.useState('');
  const [sorting, setSorting] = React.useState('init');
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
  
  if (sorting === 'NameDown') {
    sortedCoins = sortByName(searchedCoins)
    triangleName = <VscTriangleDown />
  }
  else if (sorting === 'NameUp') {
    sortedCoins = sortByName(searchedCoins).reverse()
    triangleName = <VscTriangleUp />
  }
  else if (sorting === 'PriceUp') {
    sortedCoins = sortByPrice(searchedCoins)
    trianglePrice = <VscTriangleUp />
  }
  else if (sorting === 'PriceDown') {
    sortedCoins = sortByPrice(searchedCoins).reverse()
    trianglePrice = <VscTriangleDown />
  }
  else if (sorting === 'IndexUp') {
    sortedCoins = searchedCoins.reverse()
    triangleIndex = <VscTriangleUp />
  }
  else if (sorting === 'IndexDown') {
    sortedCoins = searchedCoins
    triangleIndex = <VscTriangleDown />
  }
  else if (sorting === '24hDown') {
    triangle24h = <VscTriangleDown />
    // if(props.currency === 'EUR'){
    //   sortedCoins = sortBy24h(searchedCoins.quote.EUR)
    // }
  }
  else if (sorting === '24hUp') {
    sortedCoins = searchedCoins
    triangle24h = <VscTriangleDown />
  }
  else if (sorting === '7dDown') {
    sortedCoins = searchedCoins
    triangle7d = <VscTriangleDown />
  }
  else if (sorting === '7dUp') {
    sortedCoins = searchedCoins
    triangle7d = <VscTriangleDown />
  }
  else if (sorting === 'MarketCapDown') {
    sortedCoins = searchedCoins
    triangleMarketCap = <VscTriangleDown />
  }
  else if (sorting === 'MarketCapUp') {
    sortedCoins = searchedCoins
    triangleMarketCap = <VscTriangleDown />
  }
  else if (sorting === 'VolumeDown') {
    sortedCoins = searchedCoins
    triangleVolume = <VscTriangleDown />
  }
  else if (sorting === 'VolumeUp') {
    sortedCoins = searchedCoins
    triangleVolume = <VscTriangleDown />
  }
  else if (sorting === 'CirculatingSupplyDown') {
    sortedCoins = sortBySupply(searchedCoins)
    triangleCirculatingSupply = <VscTriangleDown />
  }
  else if (sorting === 'CirculatingSupplyUp') {
    sortedCoins = sortBySupply(searchedCoins)
    triangleCirculatingSupply = <VscTriangleDown />
  }


  React.useEffect(() => {
    getCoinData()
    console.log(sorting)
  }, [sorting]) // eslint-disable-line react-hooks/exhaustive-deps


  if (props.coins && props.coins.length > 0 && props.coins[0].quote.USD) {
    generateCoin = () => {
      return (
        sortedCoins.map((data, index) => (
          <Coin key={data.name} index={index} coin={data} currencyData={data.quote.USD} fiatSymbol='$' />
        ))
      )
    }
  }

  else if (props.coins && props.coins.length > 0 && props.coins[0].quote.EUR) {
    generateCoin = () => {
      return (
        sortedCoins.map((data, index) => (
          <Coin key={data.name} index={index} coin={data} currencyData={data.quote.EUR} fiatSymbol='€' />
        ))
      )
    }
  }

  else if (props.coins && props.coins.length > 0 && props.coins[0].quote.GBP) {
    generateCoin = () => {
      return (
        sortedCoins.map((data, index) => (
          <Coin key={data.name} index={index} coin={data} currencyData={data.quote.GBP} fiatSymbol='£' />
        ))
      )
    }
  }

  if (props.coins && props.coins.length > 0) {

    return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <SelectCurrency color='secondary' />
          <form className={classes.root} noValidate autoComplete="off" onChange={(e) => setSearch(e.target.value)}>
            <TextField id="standard-basic" label="Search" />
          </form>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell onClick={handleClickIndex}>#{triangleIndex}</TableCell>
                  <TableCell onClick={handleClickName}>Name{triangleName}</TableCell>
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
    currency: state.coins.currency
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ coinsRequestAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList)