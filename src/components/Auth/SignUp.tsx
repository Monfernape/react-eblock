import React, { useState } from "react"
import { TextField, Button, Grid } from "@material-ui/core";
import { Intro } from "../../shared/components/Intro"
import { AuthStyles } from "../../styles/Login"
import { User } from "../../models/User"

const SignUp: React.FC = () => {
    const [user, setUser] = useState<User>(new User());
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<boolean>(false);
    const classes = AuthStyles()

    const checkLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = user;
        if (validateForm()) {
            setError(true);
            return;
        } else {
            // const users: User[] = JSON.parse(localStorage.getItem("users") || "");
            // const user = users.find(
            //     (x: User) => x.Username === Username && x.Password === Password
            // );
            // if (user) localStorage.setItem("current-user", JSON.stringify(user));
        }
    };

    const validateForm = () => {
        let isError = false
        for(const prop in user){
            if(!user[prop as keyof User]) isError = true
        }
        return isError
    }

    return (
        <form onSubmit={checkLogin}>
            <Grid container className={classes.FullHeight}>
                <Intro />
                <Grid item container sm={6} xs={12} direction={"column"} justify={"center"} alignItems={"center"} className={classes.Flex}>
                    <TextField
                        value={user.name}
                        label="Name"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        error={error && user.name.length < 1}
                        helperText={
                            error && user.name.length < 1 ? "Name is required" : null
                        }
                        className={classes.FullWidth}
                    />
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
                    <TextField
                        value={password}
                        label="Confirm Password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={error && password !== user.password}
                        helperText={
                            error && error && password !== user.password ? "Passwords do not match" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.phoneNumber}
                        label="Phone Number"
                        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                        error={error && user.phoneNumber.length < 1}
                        helperText={
                            error && user.phoneNumber.length < 1 ? "Phone Number is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.address}
                        label="Address"
                        multiline
                        rows={4}
                        onChange={(e) => setUser({ ...user, address: e.target.value })}
                        error={error && user.address.length < 1}
                        helperText={
                            error && user.address.length < 1 ? "Address is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <Button type="submit" variant="contained" className={classes.FullWidth}>
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SignUp