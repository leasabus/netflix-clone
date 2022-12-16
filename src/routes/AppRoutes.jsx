import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { NavBar } from '../components/NavBar';
import { AuthContextProvider } from '../context/AuthContext';
import { Account } from '../pages/Account';
import { LoginPage } from '../pages/LoginPage';
import { SignUp } from '../pages/SignUp';
import { ProtectedRoute } from './ProtectedRoute';



export const AppRoutes = () => {
    return (
        <>
            <AuthContextProvider>
                <NavBar />
                <Routes>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="/*" element={<Home />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='account' element={<ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                    }>
                    </Route>

                </Routes>
            </AuthContextProvider>
        </>
    )
}
