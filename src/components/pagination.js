import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './stylePagination';
import { Typography } from '@material-ui/core';

function Paginate(props) {

  const classes = useStyles();
  const pageNumbersConst = [];
  const paginationColor = props.darkTheme ? 'secondary' : 'primary';
  const handleChange = (event, value) => {
    props.paginate(value);
  };

  for (let i = 1; i <= Math.ceil(props.coins.length / props.coinsPerPage); i++) {
    pageNumbersConst.push(i);
  }

  if (props.currentPage > pageNumbersConst.length) { props.paginate(1) }

  return (
    <div className={classes.root}>
      <Typography>Showing {props.currentPage*props.coinsPerPage-9} - {Math.min(props.currentPage*props.coinsPerPage, props.coins.length)} out of {props.coins.length}</Typography>
      <Pagination onChange={handleChange} page={props.currentPage} count={pageNumbersConst.length} href='!#' color={paginationColor} boundaryCount={1} size={'large'} />
    </div>
  )

}

export default Paginate