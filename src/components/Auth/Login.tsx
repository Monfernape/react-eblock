import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [mainError, setMainError] = useState('');

    const checkLogin = (event: any) => {
        event.preventDefault();
        if (username.length === 0 || password.length === 0) {
            setMainError('All the fields are required!');
            return;
        } else if (username.length > 0 && password.length > 0) {
            setMainError('');
            const users = JSON.parse(localStorage.getItem('users') || '');
            const user = users.find((x: any) => ((x.username === username || x.email === username) && x.password === password));
            if (user) {
                setUser(user);
                localStorage.setItem('current-user', JSON.stringify(user));
                setUsername('');
                setPassword('');
            } else {
                setMainError('Incorrect Username or Password!')
            }
        }
    }

    return (
        <div>
            {mainError.length > 0 && <span className="error">{mainError}</span>}
            <form onSubmit={e => checkLogin(e)}>
                <div>
                    <TextField id="username" label="Username/Email" defaultValue=""
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <TextField id="password" label="Password" type="password" defaultValue=""
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login;
