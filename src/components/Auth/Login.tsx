import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { LoginStyles } from "../../styles/Login"
interface User {
    Username: string;
    Password: string;
}

const Login: React.FC = () => {
    const [user, setUser] = useState<User>({ Username: "", Password: "" });
    const [error, setError] = useState<boolean>(false);
    const classes = LoginStyles()

    const checkLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { Username, Password } = user;
        if (Username.length === 0 || Password.length === 0) {
            setError(true);
            return;
        } else {
            const users: User[] = JSON.parse(localStorage.getItem("users") || "");
            const user = users.find(
                (x: User) => x.Username === Username && x.Password === Password
            );
            if (user) localStorage.setItem("current-user", JSON.stringify(user));
        }
    };

    return (
        <form onSubmit={checkLogin} className={classes.Flex}>
            <Grid className={classes.FlexItems}></Grid>
            <Grid className={`${classes.FlexItems} ${classes.Flex}`}>
                <Grid className={classes.AlignCenter}>
                <TextField
                    value={user.Username}
                    label="Username/Email"
                    onChange={(e) => setUser({ ...user, Username: e.target.value })}
                    error={error && user.Username.length < 1}
                    helperText={
                        error && user.Username.length < 1 ? "Username is required" : null
                    }
                />
                <TextField
                    value={user.Password}
                    label="Password"
                    onChange={(e) => setUser({ ...user, Password: e.target.value })}
                    error={error && user.Password.length < 1}
                    helperText={
                        error && user.Password.length < 1 ? "Password is required" : null
                    }
                />
                <Button type="submit" variant="contained">
                    Log In
        </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Login;
