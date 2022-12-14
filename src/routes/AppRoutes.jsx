import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { NavBar } from '../components/NavBar';
import { Movies } from '../components/Movies';
import { TvSeries } from '../components/TvSeries';


export const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="movies" element={<Movies />}></Route>
                <Route path="series" element={<TvSeries />}></Route>
                <Route path="/*" element={<Home />}></Route>

            </Routes>
        </>
    )
}
