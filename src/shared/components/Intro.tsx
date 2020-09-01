import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';

export const Intro: React.FC = () => {
    return (
        <Grid item sm={6} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#e3a624" }}>
            <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Grid style={{display: "flex", alignItems: "center"}}>
                    <Typography style={{ fontSize: "60px", fontFamily: "fantasy", color: "white" }}>E-BLOCK</Typography>
                    <SettingsIcon style={{color: "white"}} fontSize={"large"} />
                </Grid>
                <Typography style={{ fontSize: "15px", fontStyle: "oblique", color: "white" }}>We Keep Your Engine Running</Typography>
            </Grid>
        </Grid>
    )
}
