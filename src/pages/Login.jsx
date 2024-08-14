import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const toggle = () => {
        setVisible(!visible);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (data.email.trim() === '' || data.password.trim() === '') {
            alert('Email and password cannot be blank.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/login', {
                email: data.email,
                password: data.password
            });
            if (response.data === 'Login successful') {
                alert('Login successful');
                navigate('/'); 
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Login failed');
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="heading-login">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="user-box">
                        <input
                            type="email"
                            className="input"
                            id="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            className="input"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="sub-main">
                        <div className="btn-last">
                            <button type="submit" className="submit-btn">Submit</button>
                            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                            <p>Admin login? <Link to="/admin-login">Admin Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
