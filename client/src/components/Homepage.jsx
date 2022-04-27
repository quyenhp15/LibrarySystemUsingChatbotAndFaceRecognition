import React from "react";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    let navigate = useNavigate();

    let handleLogout = () => {
        localStorage.removeItem("accessToken")
        navigate('/');
    }

    return (
        <div>
            <h1 style={{ color: "red", fontSize: "50px" }}>HOME PAGE</h1>
            <button type="button" onClick={handleLogout}>
                Log Out
            </button>

        </div>
    )
}

export default Homepage