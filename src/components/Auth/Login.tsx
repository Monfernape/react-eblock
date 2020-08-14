import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { Intro } from "../../shared/components/Intro"
import { AuthStyles } from "../../styles/Login"
import { User } from "../../models/User"
import { DataService } from "../../services/DataService/DataService"

const Login: React.FC = () => {
    const [user, setUser] = useState<Pick<User, "username" | "password">>({ username: "", password: "" });
    const [error, setError] = useState<boolean>(false);
    const classes = AuthStyles()
    const dataService = new DataService()

    const checkLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = user;
        if (username?.length === 0 || password?.length === 0) {
            setError(true);
            return;
        } else {
            await dataService.login(username, password)
        }
    };

    return (
        <form onSubmit={checkLogin}>
            <Grid container className={classes.FullHeight}>
                <Intro />
                <Grid item container sm={6} xs={12} direction={"column"} justify={"center"} alignItems={"center"} className={classes.Flex}>
                    <TextField
                        value={user.username}
                        label="Username/Email"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        error={error && user.username.length < 1}
                        helperText={
                            error && user.username.length < 1 ? "Username is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.password}
                        label="Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        error={error && user.password.length < 1}
                        helperText={
                            error && user.password.length < 1 ? "Password is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <Button type="submit" variant="contained" className={classes.FullWidth}>
                        Log In
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Login;
