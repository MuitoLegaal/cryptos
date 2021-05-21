import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { initRequest } from '../utils/fetchCoinsData';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData(1, 159, 6.0, 24, 4.0),
//   createData(2, 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable() {
  const classes = useStyles();
  const [coins, setCoins] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://cors-anywhere.herokuapp.com/pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD",
      initRequest)
      const body = await data.json()
      console.log(body)
      setCoins(body)
    }
    fetchData()
    console.log(coins)
  }, [])

  React.useEffect(() => {
    console.log(coins)
  }, [coins])

  if (coins.length>0) {

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
          {coins.data.map((coin) => (
            <TableRow key={coin.name}>
              <TableCell component="th" scope="row">
                {coin.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {coin.name}
              </TableCell>
              <TableCell align="right">{coin.quote.USD.price}</TableCell>
              <TableCell align="right">{coin.quote.USD.market_cap}</TableCell>
              <TableCell align="right">{coin.quote.USD.volume_24h}</TableCell>
              <TableCell align="right">{coin.circulating_supply}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
  }

  else {
    return (<p>Loading</p>)
  }
}