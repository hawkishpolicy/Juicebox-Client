import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./Main";
import { Login } from "./Login";
import { Register } from "./Register";

const allRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </div>
    )
}
export default allRoutes;