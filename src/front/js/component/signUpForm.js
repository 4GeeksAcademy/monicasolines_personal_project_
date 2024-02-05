import React, { useContext, useState } from 'react';
import '../../styles/authForms.css';
import { Context } from "../store/appContext";

const SignUpForm = () => {
    const {store, actions} = useContext(Context)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //confirm password logic
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    //show password
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('The passwords do not match');
            return;
        }

        try {
            // Call the signup action with user data
            const response = await actions.signup({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                confirm_Password: confirmPassword,
            });
            if (response && response.ok) {
                // Optionally, you can perform other actions after successful signup
                alert('User created successfully. Please go to the menu and login.');
            } else if (response) {
                const errorData = await response.json();
                console.error('Signup failed:', errorData);
                setErrorMessage(errorData.error || 'Signup failed. Please try again.');
            } else {
                console.error('Signup failed: Response is undefined');
                setErrorMessage('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred during signup:', error);
            setErrorMessage('Signup failed. Please try again.');
        }
    };

    return (

        <form onSubmit={handleSubmit} className="form-container">
            <div className="page-title">Sign Up</div>

            <div className="form-group">
                <label className="label">First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" />
            </div>
            <div className="form-group">
                <label className="label">Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" />
            </div>
            <div className="form-group">
                <label className="label">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
            </div>
            <div className="form-group">
                <label className="label">Password:</label>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
            </div>
            <div className="form-group">
                <label className="label">Confirm Password:</label>
                <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="eye-icon-container" >
                <div className="text pe-2"> Show Passwords  </div>
                <div className="eye" id="eye1">
                    <button onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                    </button>

                </div>
            </div>
            <button type="submit" className="submit-button">Submit</button>

        </form>
    );
};


export default SignUpForm;