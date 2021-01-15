import './App.css';
import React from "react";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0B0C10"
        },
        secondary: {
            main: "#66FCF1"
        }
    }
});

export default class App extends React.Component {

    render() {
        return (
            <body>
            <MuiThemeProvider theme={theme}>
            <Router>
            <div>
                <NavBar />
            </div>
            </Router>
                <Welcome />
            </MuiThemeProvider>
            </body>
        )
    }
}