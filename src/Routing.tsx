import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//TODO: IMPLEMENTING AUTH
const Routing: React.FC = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/"
                        component={() => 
                            <div>
                                Component ONE
                            </div>
                            // <PrivateRoute
                            //     yes={() => (
                            //         <div>Default Route</div>
                            //     )}
                            //     no={() => (
                            //         <Redirect to="/login" />
                            //     )}
                            // />
                        } 
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
