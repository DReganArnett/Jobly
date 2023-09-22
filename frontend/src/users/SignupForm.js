import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../common/Header';
import Alert from "../common/Alert";

const SignupForm = ({signup}) => {
    const history = useHistory();
    const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    }
    const [formData, setFormData] = useState(initialState)
    const [formErrors, setFormErrors] = useState([]);

    // Handles form submit
    async function handleSubmit(evt) {
        evt.preventDefault();
        let res = await signup(formData);
        if(res.success) {
            history.push('/');
        } else {
            setFormErrors(res.errors);
        }
    }

    // Updates form data fields on change
    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    }

    return (
        <div className="SignupForm">
            <Header />
            <div className="SignupForm-container">
                <h3 className='SignupForm-h3'>Sign up here to begin your job search:</h3>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input 
                        className="SignupForm-usernameInput"
                        type="text"
                        name="username"
                        id="username" 
                        placeholder="Enter a username"
                        value={formData.username}
                        onChange={handleChange}>
                    </input>
                    <br></br>
                    <label htmlFor="password">Password: </label>
                    <input 
                        className="SignupForm-passwordInput"
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter a password"
                        value={formData.password}
                        onChange={handleChange}>
                    </input>
                    <br></br>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        className="SignupForm-firstNameInput"
                        type="text"
                        name="firstName"
                        id="firstName" 
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}>
                    </input>
                    <br></br>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        className="SignupForm-lastNameInput"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}>
                    </input>
                    <br></br>
                    <label htmlFor="email">E-mail: </label>
                    <input 
                        className="SignupForm-emailInput"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your E-mail"
                        value={formData.email}
                        onChange={handleChange}>
                    </input>
                    <br></br>
                    <br></br>
                    {formErrors.length ? <Alert messages={formErrors} /> : null}
                    <button type="submit" onSubmit={handleSubmit}>Sign Up!</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;