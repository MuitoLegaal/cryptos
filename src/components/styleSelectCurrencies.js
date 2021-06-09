import { 
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme,
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

const useStyles = makeStyles(() => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
    color: theme.palette.secondary
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    width: "100%",
    justifyContent: 'center'
  },
  tableContainer: {
    minWidth: 800,
    width: "90%",
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#e67e22'
    },
    textPrimary: {
      main: 'black',
    },
    textSecondary: {
      main: 'white',
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Inter",
    body1: {
      display: "flex",
      fontSize: "1.05rem",
      fontFamily: "Inter",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    },
    body2: {
      display: "flex",
      fontSize: "1rem",
      fontFamily: "Inter",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center",
      fontWeight: 100
    },
    footer: {
      display: "flex",
      fontSize: "0.8rem",
      fontFamily: "Inter",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    }
  }
});

export {useStyles, useStylesPopover, linearProgressStyles, theme, RedTableCell, GreenTableCell}