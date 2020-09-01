import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import CreateOrder from './components/Orders/CreateOrder/CreateOrder';
import OnTimeFixation from './components/Orders/Fixation/OnTimeFixation';
import OrderList from './components/Orders/OrderList/OrderList';
import UserPage from './components/User/UserPage';
import HomeComponent from './components/Home/Home';

//TODO: IMPLEMENTING AUTH
const Routing: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"
                    component={Login}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                {/* <Route path="/create-order" component={CreateOrder}></Route> */}
                <Route path="/user" component={UserPage}></Route>
                <Route path="/fixation" component={OnTimeFixation}></Route>
                <Route path="/home" component={HomeComponent}></Route>
                <Route path="/two"
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
                {/* <Redirect to='/' /> */}
            </Switch>
        </Router>
    )
}

export default Routing;
