import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {

    const { user } = UserAuth();
    //if not exist an user, navigate to home
    if (!user) {
        return <Navigate to="/*"></Navigate>
    } else {
        return children
    }

}
