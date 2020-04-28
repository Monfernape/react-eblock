import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CreateOrder from './components/CreateOrder/CreateOrder';

import Login from './components/Auth/Login';

//TODO: IMPLEMENTING AUTH
const Routing: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"
                    component={Login}
                />
                <Route exact path="/create-order"
                    component={CreateOrder}
                />
                <Route exact path="/two"
                    component={() =>
                        <div>Component TWO</div>
                        // <PrivateRoute
                        //     yes={() => (
                        //         <div>Second Route</div>
                        //     )}
                        //     no={() => (
                        //         <Redirect to="/login" />
                        //     )}
                        // />
                    }
                />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default Routing;
