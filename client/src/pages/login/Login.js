import "./login.css";
import { LOGIN } from "../../queries/UserQueries";
import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const loginSuccess = (authData) => {
        const data = authData.data.login;
        if (data.token !== "") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("fullName", data.fullName);
            setTimeout(() => {
                navigate('/home')
            }, 1000);
        }
    }

    const [login] = useMutation(LOGIN);

    const onLogin = async (event) => {
        event.preventDefault();
        if (!email || !email.includes("@")) {
            setError("Please enter valid email");
            return;
        } else if (!password) {
            setError("Please enter password");
            return;
        }
        login({
            variables: { email, password }
        }).then(loginSuccess)
            .catch(err => setError(err.message));
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={onLogin}>
                <label>Email</label>
                <input className="loginInput" type="text"
                    name="email"
                    value={email}
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="loginInput" type="password"
                    placeholder="Enter your password..."
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                {error && <div className="mt-3 d-grid">{error}</div>}

                <button className="loginButton">Login</button>
            </form>
        </div>
    );
}