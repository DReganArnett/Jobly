import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import UserContext from "../users/UserContext";



const Home = () => {
    const {currentUser} = useContext(UserContext);
    
    const homeIfLoggedOut = () => {
        return (
            <div className='Home-loggedOut'>
                <br></br>
                <br></br>
                <h3>New to Jobly?</h3>
                <button><Link to="/signup">Sign Up Here!</Link></button>
                <br></br>
                <br></br>
                <h3>Continuing your job search?</h3>
                <button><Link to="/login">Log In Here!</Link></button>
            </div>
        );
    }

    const homeIfLoggedIn = () => {
        
        return (
            <div className='Home-loggedIn'>
                <h2>Welcome, {currentUser.firstName || currentUser.username}!</h2>
                <h4>It's time to find your dream job!</h4>
            </div>
        );
    }

    return (
        <div className="Home">
            <Header />
            <div className='Home-container'>
                {currentUser ? homeIfLoggedIn() : homeIfLoggedOut()}
            </div>
       </div>
    );
}

export default Home;