import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import CreateOrder from './components/Orders/CreateOrder/CreateOrder';
import OnTimeFixation from './components/Orders/Fixation/OnTimeFixation';
import OrderList from './components/Orders/OrderList/OrderList';
import UserOrderList from './components/UserOrderList/OrderList';
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
                <Route exact path="/order-list" component={OrderList}></Route>
                <Route exact path="/create-order" component={CreateOrder}></Route>
                <Route exact path="/user-order-list" component={UserOrderList}></Route>
                <Route exact path="/fixation" component={OnTimeFixation}></Route>
                <Route exact path="/home" component={HomeComponent}></Route>
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
