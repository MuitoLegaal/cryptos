import React from 'react';
import '../App.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import { formatNumber } from '../utils/logic/formatNumber';


export default function Coin(props) {

 if (props.currency === "USD"){
  return (
    <TableBody>
      {props.coins.map((coin, index) => ( 
        <TableRow key={coin.name}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell component="th" scope="row">
            <Box display="flex">
              <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
              {coin.name}
            </Box>
          </TableCell>
          <TableCell align="right">{formatNumber(coin.quote.USD.price)}</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.USD.percent_change_24h)}%</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.USD.percent_change_7d)}%</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.USD.market_cap)}</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.USD.volume_24h)}</TableCell>
          <TableCell align="right">{formatNumber(coin.circulating_supply)}</TableCell>
        </TableRow>
      ))
      }
    </TableBody>
  )}

else if (props.currency === "EUR") {
  return (
    <TableBody>
      {props.coins.map((coin, index) => ( 
        <TableRow key={coin.name}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell component="th" scope="row">
            <Box display="flex">
              <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
              {coin.name}
            </Box>
          </TableCell>
          <TableCell align="right">{formatNumber(coin.quote.EUR.price)}</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.EUR.percent_change_24h)}%</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.EUR.percent_change_7d)}%</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.EUR.market_cap)}</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.EUR.volume_24h)}</TableCell>
          <TableCell align="right">{formatNumber(coin.circulating_supply)}</TableCell>
        </TableRow>
      ))
      }
    </TableBody>
  )
}

else if (props.currency === "GBP") {
  return (
    <TableBody>
      {props.coins.map((coin, index) => ( 
        <TableRow key={coin.name}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell component="th" scope="row">
            <Box display="flex">
              <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
              {coin.name}
            </Box>
          </TableCell>
          <TableCell align="right">{formatNumber(coin.quote.GBP.price)}</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.GBP.percent_change_24h)}%</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.GBP.percent_change_7d)}%</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.GBP.market_cap)}</TableCell>
          <TableCell align="right">{formatNumber(coin.quote.GBP.volume_24h)}</TableCell>
          <TableCell align="right">{formatNumber(coin.circulating_supply)}</TableCell>
        </TableRow>
      ))
      }
    </TableBody>
  )
}

else return <TableBody>Hello</TableBody>

}