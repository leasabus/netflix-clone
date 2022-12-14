import React from 'react'
import { PopularMovies } from '../services/PopularMovies'
import { RowComponent } from './RowComponent'
import request from '../services/request'
import { Footer } from './Footer'


export const Home = () => {



    return (
        <>

            <PopularMovies />
            {/* el row id sirve para utilizar el slider en todas las filas, con un unico id, si no mueve uno solo */}
            <RowComponent rowID='1' title='Up Coming' fetchURL={request.requestUncoming} />
            <RowComponent rowID='2' title='Top Rated' fetchURL={request.topRated} />
            <RowComponent rowID='3' title='Trending' fetchURL={request.requestTrending} />
            <RowComponent rowID='4' title='Horror' fetchURL={request.requestHorror} />

            <Footer />



        </>
    )
}
