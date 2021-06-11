import { 
  makeStyles,
  withStyles
} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const RedTableCell = withStyles({
  root:  {
    color: 'red'
  }
})(TableCell);

const GreenTableCell = withStyles({
  root:  {
    color: 'green'
  }
})(TableCell);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
    color: theme.palette.primary
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary
  },
  table: {
    width: "100%",
    justifyContent: 'center',
    color: theme.palette.primary
  },
  tableContainer: {
    minWidth: 800,
    width: "100%",
    color: theme.palette.primary
  }
}));

const linearProgressStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

const useStylesPopover = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));


export {useStyles, useStylesPopover, linearProgressStyles, RedTableCell, GreenTableCell}