import React, { useState } from "react";
import "../Styling/Style.css";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            navigate('/pixabay');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <>
            <div id="contain">
                <div className="container1">
                    <form className="login" onSubmit={handleLogin}>  
                        <h2>Login</h2>  
                        <div className="form-group1">  
                            <label htmlFor="name">User-Name</label>  
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your name"
                                onChange={(e) => setUsername(e.target.value)}
                            />  
                        </div>  
                        <div className="form-group1">  
                            <label htmlFor="password">Password</label>  
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="Enter your Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />  
                        </div>  
                        <div className="form-group1">
                            <button type="submit">Login</button>
                        </div>  
                        <Link to="/signup">
                            <p id="create">Create an account? Sign Up</p>  
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
