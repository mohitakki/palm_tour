import {
  green, red,
} from '@material-ui/core/colors';

const white = '#FFFFFF';
const black = '#000000';
const appColor = '#fecf00';

export default {
  black,
  white,
  palette: {
    primary: {
      light: '#fecf00',
      main: '#fecf00',
      dark: '#fecf00',
    },
    secondary: {
      light: '#fecf00',
      main: '#fecf00',
      dark:'#fecf00',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
    // text: {
    //   primary: blueGrey[900],
    //   secondary: blueGrey[600],
    //   link: blue[600],
    // },
  },
};
