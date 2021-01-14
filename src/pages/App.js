import './App.css';
import React from "react";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import navbar from '../components/navbar';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0B0C10",
        },
        secondary: {
            main: "#66FCF1",
        },
    },
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <div>
              <navbar/>
          </div>
      </MuiThemeProvider>
  );
}

export default App;
