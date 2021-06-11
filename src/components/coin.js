import React from 'react';
import '../App.css';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import { formatNumberWithDecimals, formatNumberNoDecimal } from '../utils/logic/formatNumber';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { linearProgressStyles, GreenTableCell, RedTableCell, useStylesPopover } from './styleSelectCurrencies';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';


function Coin(props) {

  const classes = linearProgressStyles();
  const classesPopover = useStylesPopover();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


  return (
    <TableRow>
      <TableCell>
        <span className="lock">
          <StarOutlineIcon className="icon-unlock" />
          <StarIcon className="icon-lock" />
        </span>
      </TableCell>
      <TableCell component="th" scope="row">
        {props.rank}
      </TableCell>
      <TableCell component="th" scope="row">
        <Box className="coinName" display="flex">
          <img alt="coinLogo" className="coinLogo" src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${props.coin.id}.png`} />
          {props.coin.name}
          <div>&nbsp;</div>
          {props.coin.symbol}
        </Box>
      </TableCell>
      <TableCell align="right">{props.fiatSymbol}{formatNumberWithDecimals(props.currencyData.price)}</TableCell>
      {props.currencyData.percent_change_24h >= 0 &&
        <GreenTableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(props.currencyData.percent_change_24h)}%</GreenTableCell>
      }
      {props.currencyData.percent_change_24h < 0 &&
        <RedTableCell align="right"><VscTriangleDown className='styleLoss' />{formatNumberWithDecimals(props.currencyData.percent_change_24h).substring(1)}%</RedTableCell>
      }
      {props.currencyData.percent_change_7d >= 0 &&
        <GreenTableCell className='styleGain' align="right"><VscTriangleUp className='styleGain' />{formatNumberWithDecimals(props.currencyData.percent_change_7d)}%</GreenTableCell>
      }
      {props.currencyData.percent_change_7d < 0 &&
        <RedTableCell align="right"><VscTriangleDown className='styleLoss' />{formatNumberWithDecimals(props.currencyData.percent_change_7d).substring(1)}%</RedTableCell>
      }
      <TableCell align="right">{formatNumberNoDecimal(props.currencyData.market_cap)}</TableCell>
      <TableCell align="right">{formatNumberNoDecimal(props.currencyData.volume_24h)}
        <p>{formatNumberNoDecimal(props.currencyData.volume_24h / props.currencyData.price)}&nbsp;{props.coin.symbol}</p>
      </TableCell>
      <TableCell align="right">
        {props.coin.max_supply &&
          <BsInfoCircleFill
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose} />
        }
        &nbsp;{formatNumberNoDecimal(props.coin.circulating_supply)}
        {props.coin.max_supply &&
          <LinearProgress className={classes.root} variant="determinate" value={props.coin.circulating_supply / props.coin.max_supply * 100} />
        }
      </TableCell>
      <Popover
        id="mouse-over-popover"
        className={classesPopover.popover}
        classes={{
          paper: classesPopover.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className='popoverContainer'>
          <div className='popoverContent'>
            <Typography>
              Percentage:
          </Typography>
            <Typography>
              {formatNumberWithDecimals(props.coin.circulating_supply / props.coin.max_supply * 100)}%
          </Typography>
          </div>
          <LinearProgress className={classes.root} variant="determinate" value={props.coin.circulating_supply / props.coin.max_supply * 100} />
          <div className='popoverContent'>
            <Typography>
              Circulating Supply:
          </Typography>
            <Typography>
              {formatNumberNoDecimal(props.coin.circulating_supply)}&nbsp;{props.coin.symbol}
            </Typography>
          </div>
          <div className='popoverContent'>
            <Typography>
              Max Supply:
          </Typography>
            <Typography>
              {formatNumberNoDecimal(props.coin.max_supply)}&nbsp;{props.coin.symbol}
            </Typography>
          </div>
        </div>
      </Popover>
    </TableRow>
  )
}

export default Coin;