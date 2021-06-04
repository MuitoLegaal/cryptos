import { 
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme
} from '@material-ui/core/styles';

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
      fontSize: "1.1rem",
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
      fontSize: "8rem",
      fontFamily: "Inter",
      verticalAlign: "middle",
      fontWeight: 500,
      color: 'green'
    }
  }
});

export {useStyles, linearProgressStyles, theme}