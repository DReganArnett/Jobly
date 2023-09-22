import React, {useState, useContext} from 'react';
import Alert from "../common/Alert";
import UserContext from './UserContext';
import JoblyApi from '../api';

const ProfileForm = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const initialState = {
        username: currentUser.username,
        password: "",
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
    }
    const [formData, setFormData] = useState(initialState)
    const [formErrors, setFormErrors] = useState([]);
    const [updateConfirmed, setUpdateConfirmed] = useState(false);

    // Handles form submit
    async function handleSubmit(evt) {
        evt.preventDefault();
        let data = {
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
        };
        let username = formData.username;
        let updatedUserProfile;
        try {
            updatedUserProfile = await JoblyApi.updateUserProfile(username, data);
        } catch (errors) {
            setFormErrors(errors);
            return;
        }
            
        setFormData(data => ({...data, password: ""}));
        setFormErrors([]);
        setUpdateConfirmed(true);
        setCurrentUser(updatedUserProfile)
    }

    // Updates form data fields on change
    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
        setFormErrors([]);
    }

    return (
        <div className="ProfileForm">
            <h4>Update {currentUser.username}'s' Profile Here:</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <span className="ProfileForm-username">{formData.username}</span>
                <br></br>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    className="ProfileForm-firstNameInput"
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
                    className="ProfileForm-lastNameInput"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}>
                </input>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input 
                    className="ProfileForm-passwordInput"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter a password"
                    value={formData.password}
                    onChange={handleChange}>
                </input>
                <br></br>
                <label htmlFor="email">Email: </label>
                <input 
                    className="ProfileForm-emailInput"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                {formErrors.length ? <Alert messages={formErrors} /> : null}
                {updateConfirmed
                    ? 
                    <Alert messages={["Profile successfully updated"]} /> : null}
                <button type="submit">Save changes</button>
            </form>
        </div>
    )
}

export default ProfileForm;