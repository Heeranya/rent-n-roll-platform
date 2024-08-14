import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const AdminLogin = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const toggle = () => {
        setVisible(!visible);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials for simulation
        const validEmail = 'admin@example.com';
        const validPassword = 'password123';

        if (data.email.trim() === '' || data.password.trim() === '') {
            alert('Email and password cannot be blank.');
            return;
        }

        if (data.email === validEmail && data.password === validPassword) {
            alert('Login successful');
            navigate('/dashboard'); 
        } else {
            alert('Invalid credentials');
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="heading-login">Admin Login</h2>
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
                            <button type="submit" className="submit-btn"><Link to="/dashboard">Submit</Link></button>
                            <p><Link to="/login" className="switch-to-user"> Switch to User </Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
