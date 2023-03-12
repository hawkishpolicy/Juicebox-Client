import React from "react";


export function Login () {
    return (
        <div>
            <h1>Login</h1>
            <form className="auth-form login">
                <label>
                    Username:
                    <input type={"text"} placeholder="Username" required/>
                </label>
                <label>
                    Password:
                    <input type={"password"} placeholder="Password" required/>
                 </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
};

