import React, {useState} from "react";
import { registerUser } from "../API-Adapter";


const Register = () => {
    return (
<div>
    <h1>Register:</h1>
    <form className="auth-form register">
        <label>
        Username:
        <input type={"text"} placeholder="Username" required/>
        </label>
        <label>
        Password:
        <input type={"password"} placeholder="Password" required/>
        </label>
        <label>
        Confirm Password:
        <input type={"password"} placeholder="Confirm Password" required/>
        </label>
        <button type="submit">Register</button>
    </form>
</div>
    )
}


export default Register