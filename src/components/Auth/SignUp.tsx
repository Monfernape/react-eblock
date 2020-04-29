import React, { useState } from "react"
import { TextField, Button, Grid } from "@material-ui/core";
import { AuthStyles } from "../../styles/Login"
import { User } from "../../models/User"

const SignUp: React.FC = () => {
    const [user, setUser] = useState<User>(new User());
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<boolean>(false);
    const classes = AuthStyles()

    const checkLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { Username, Password } = user;
        if (validateForm()) {
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
                <Grid item sm={6} xs={12}></Grid>
                <Grid item sm={6} xs={12} direction={"column"} justify={"center"} alignItems={"center"} className={classes.Flex}>
                    <TextField
                        value={user.Name}
                        label="Name"
                        onChange={(e) => setUser({ ...user, Name: e.target.value })}
                        error={error && user.Name.length < 1}
                        helperText={
                            error && user.Name.length < 1 ? "Name is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.Username}
                        label="Username/Email"
                        onChange={(e) => setUser({ ...user, Username: e.target.value })}
                        error={error && user.Username.length < 1}
                        helperText={
                            error && user.Username.length < 1 ? "Username is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.Password}
                        label="Password"
                        onChange={(e) => setUser({ ...user, Password: e.target.value })}
                        error={error && user.Password.length < 1}
                        helperText={
                            error && user.Password.length < 1 ? "Password is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={password}
                        label="Confirm Password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={error && password !== user.Password}
                        helperText={
                            error && error && password !== user.Password ? "Passwords do not match" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.PhoneNumber}
                        label="Phone Number"
                        onChange={(e) => setUser({ ...user, PhoneNumber: e.target.value })}
                        error={error && user.PhoneNumber.length < 1}
                        helperText={
                            error && user.PhoneNumber.length < 1 ? "Phone Number is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.Address}
                        label="Address"
                        multiline
                        rows={4}
                        onChange={(e) => setUser({ ...user, Address: e.target.value })}
                        error={error && user.Address.length < 1}
                        helperText={
                            error && user.Address.length < 1 ? "Address is required" : null
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