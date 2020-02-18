import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange400, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: orange400
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: orange400,
  }
});


export default themeDefault;
