import React, { useState } from 'react';
import { registerUser } from '../../api/userApi';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            await registerUser(username, password);
            setMessage('User registered successfully!');
        } catch (error) {
            setMessage('Error registering user.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;