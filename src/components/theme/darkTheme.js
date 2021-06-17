import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
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
    subtitle1: {
      display: "flex",
      fontSize: "0.8rem",
      fontFamily: "Inter",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    }
  }
});