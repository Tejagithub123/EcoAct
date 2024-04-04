import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
    const token = localStorage.getItem("token");
    console.log(token)
    const isAuthenticated = token !== null;

    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
        </>
    );
}
