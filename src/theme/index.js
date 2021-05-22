import { createMuiTheme } from '@material-ui/core';
import { red, green, yellow } from '@material-ui/core/colors';

import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#fecf00',
      contrastText: "#fff"
    },
    secondary: {
      main:'#fff',
    },
    
  },
});

export default theme;
