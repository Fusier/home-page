import './NavBar.css';
import React from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";


export default function NavBar() {

    return (
        <div>
            <AppBar className={"app-bar"}>
                <Toolbar>
                    <Typography className={"typography"}>
                        Samun portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
