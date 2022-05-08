import React, {useContext, useState} from 'react';
import {Context} from "../index";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {store} = useContext(Context)
    return (
        <div>
            <input
                onChange={event => setEmail(event.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={event => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />
            <input
                onChange={event => setUsername(event.target.value)}
                value={username}
                type="text"
                placeholder='UserName'
            />
            <button onClick={() => store.login(username, password)}>Логин</button>
            <button onClick={() => store.registration(username, email, password)}>Регистрация</button>
        </div>
    );
};

export default LoginForm;
