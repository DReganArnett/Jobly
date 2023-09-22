import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../home-nav/Home';
import SignupForm from '../users/SignupForm';
import LoginForm from '../users/LoginForm';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import Profile from '../users/Profile';
import PrivateRoute from './PrivateRoute';


const Routes = ({login, signup}) => {

    return (
        <div className='Routes'>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <PrivateRoute exact path="/profile">
                    <Profile />
                </PrivateRoute>
                
                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>

                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>

                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>

                <Redirect to="/"></Redirect>
            </Switch>
        </div>

    )
}

export default Routes;