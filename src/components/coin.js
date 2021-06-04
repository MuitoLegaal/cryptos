import React from 'react';
import '../App.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import { formatNumberWithDecimals, formatNumberNoDecimal } from '../utils/logic/formatNumber';
import { connect } from 'react-redux';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import LinearProgress from '@material-ui/core/LinearProgress';
import { linearProgressStyles } from './styleSelectCurrencies';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';


function Coin(props) {

  const classes = linearProgressStyles();

  if (props.coins && props.coins[0].quote.USD) {
    return (
      <TableBody>
        {props.searchedCoins.map((coin, index) => (
          <TableRow key={coin.name}>
            <TableCell>
              <span className="lock">
                <StarOutlineIcon className="icon-unlock" />
                <StarIcon className="icon-lock" />
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
              <Box className="coinName" display="flex">
                <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
                {coin.name}
                <div>&nbsp;</div>
                {coin.symbol}
              </Box>
            </TableCell>
            <TableCell align="right">${formatNumberWithDecimals(coin.quote.USD.price)}</TableCell>
            {coin.quote.USD.percent_change_24h >= 0 &&
            <TableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(coin.quote.USD.percent_change_24h)}%</TableCell>
            }
             {coin.quote.USD.percent_change_24h < 0 &&
            <TableCell align="right"><VscTriangleDown className='styleLoss'  />{formatNumberWithDecimals(coin.quote.USD.percent_change_24h).substring(1)}%</TableCell>
            }
              {coin.quote.USD.percent_change_7d >= 0 &&
            <TableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(coin.quote.USD.percent_change_7d)}%</TableCell>
            }
             {coin.quote.USD.percent_change_7d < 0 &&
            <TableCell align="right"><VscTriangleDown className='styleLoss' />{formatNumberWithDecimals(coin.quote.USD.percent_change_7d).substring(1)}%</TableCell>
            }
            <TableCell align="right">{formatNumberNoDecimal(coin.quote.USD.market_cap)}</TableCell>
            <TableCell align="right">{formatNumberNoDecimal(coin.quote.USD.volume_24h)}
              <p>{formatNumberNoDecimal(coin.quote.USD.volume_24h / coin.quote.USD.price)}&nbsp;{coin.symbol}</p>
            </TableCell>
            <TableCell align="right"><BsInfoCircleFill />&nbsp;{formatNumberNoDecimal(coin.circulating_supply)}
              {coin.max_supply &&
                <LinearProgress className={classes.root} variant="determinate" value={(coin.circulating_supply / coin.max_supply * 100)} />
              }
            </TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    )
  }

  else if (props.coins && props.coins[0].quote.EUR) {
    return (
      <TableBody>
        {props.searchedCoins.map((coin, index) => (
          <TableRow key={coin.name}>
            <TableCell>
              <span className="lock">
                <StarOutlineIcon className="icon-unlock" />
                <StarIcon className="icon-lock" />
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
              <Box className="coinName" display="flex">
                <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
                {coin.name}
                <div>&nbsp;</div>
                {coin.symbol}
              </Box>
            </TableCell>
            <TableCell align="right">€{formatNumberWithDecimals(coin.quote.EUR.price)}</TableCell>
            <TableCell align="right">${formatNumberWithDecimals(coin.quote.EUR.price)}</TableCell>
            {coin.quote.EUR.percent_change_24h >= 0 &&
            <TableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(coin.quote.USD.percent_change_24h)}%</TableCell>
            }
             {coin.quote.EUR.percent_change_24h < 0 &&
            <TableCell align="right"><VscTriangleDown className='styleLoss'/>{formatNumberWithDecimals(coin.quote.EUR.percent_change_24h).substring(1)}%</TableCell>
            }
              {coin.quote.EUR.percent_change_7d >= 0 &&
            <TableCell className='styleGain' align="right"><VscTriangleUp className='styleGain'/>{formatNumberWithDecimals(coin.quote.EUR.percent_change_7d)}%</TableCell>
            }
             {coin.quote.EUR.percent_change_7d < 0 &&
            <TableCell align="right"><VscTriangleDown className='styleLoss' />{formatNumberWithDecimals(coin.quote.EUR.percent_change_7d).substring(1)}%</TableCell>
            }
            <TableCell align="right">{formatNumberNoDecimal(coin.quote.EUR.market_cap)}</TableCell>
            <TableCell align="right">{formatNumberNoDecimal(coin.quote.EUR.volume_24h)}
              <p>{formatNumberNoDecimal(coin.quote.EUR.volume_24h / coin.quote.EUR.price)}&nbsp;{coin.symbol}</p>
            </TableCell>
            <TableCell align="right"><BsInfoCircleFill />&nbsp;{formatNumberNoDecimal(coin.circulating_supply)}
              {coin.max_supply &&
                <LinearProgress className={classes.root} variant="determinate" value={(coin.circulating_supply / coin.max_supply * 100)} />
              }

            </TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    )
  }

  else if (props.coins && props.coins[0].quote.GBP) {
    return (
      <TableBody>
        {props.searchedCoins.map((coin, index) => (
          <TableRow key={coin.name}>
            <TableCell>
              <span className="lock">
                <StarOutlineIcon className="icon-unlock" />
                <StarIcon className="icon-lock" />
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
              <Box className="coinName" display="flex">
                <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
                {coin.name}
                <div>&nbsp;</div>
                {coin.symbol}
              </Box>
            </TableCell>
            <TableCell align="right">${formatNumberWithDecimals(coin.quote.GBP.price)}</TableCell>
            <TableCell align="right">${formatNumberWithDecimals(coin.quote.GBP.price)}</TableCell>
            {coin.quote.GBP.percent_change_24h >= 0 &&
            <TableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(coin.quote.GBP.percent_change_24h)}%</TableCell>
            }
             {coin.quote.GBP.percent_change_24h < 0 &&
            <TableCell align="right"><VscTriangleDown className='styleLoss' />{formatNumberWithDecimals(coin.quote.GBP.percent_change_24h).substring(1)}%</TableCell>
            }
              {coin.quote.GBP.percent_change_7d >= 0 &&
            <TableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(coin.quote.GBP.percent_change_7d)}%</TableCell>
            }
             {coin.quote.GBP.percent_change_7d < 0 &&
            <TableCell align="right"><VscTriangleDown className='styleLoss' />{formatNumberWithDecimals(coin.quote.GBP.percent_change_7d).substring(1)}%</TableCell>
            }
            <TableCell align="right">{formatNumberNoDecimal(coin.quote.GBP.market_cap)}</TableCell>
            <TableCell align="right">{formatNumberNoDecimal(coin.quote.GBP.volume_24h)}
              <p>{formatNumberNoDecimal(coin.quote.GBP.volume_24h / coin.quote.GBP.price)}&nbsp;{coin.symbol}</p>
            </TableCell>
            <TableCell align="right"><BsInfoCircleFill />&nbsp;{formatNumberNoDecimal(coin.circulating_supply)}
              {coin.max_supply &&
                <LinearProgress className={classes.root} variant="determinate" value={(coin.circulating_supply / coin.max_supply * 100)} />
              }
            </TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    )
  }

  else return <TableBody>Hello</TableBody>

}

const mapStateToProps = (state) => {
  return {
    coins: state.coins.data,
    currency: state.coins.currency
  }
};

export default connect(mapStateToProps, null)(Coin);