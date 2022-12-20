import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



export const NavBar = () => {

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();


    //logout function
    const handleLogOut = async () => {
        try {
            await logOut()
            navigate("/*")

        } catch (error) {
            console.log("logout error")
        }
    }

    return (
        <>
            <div className='w-auto h-[70px] '>
                {/* si existe un usuario autenticado mostramos esto */}
                {user?.email ? (
                    <div className='bg-black text-white flex justify-between items-center text-center py-1 px-2 text-2xl  '>
                        <div className='items-center flex flex-row gap-2 p-4'>

                            <Link to="home"> <button className='text-2xl md:text-3xl lg:text-4xl '> <span className='text-red-600 text-3xl md:text-4xl font-bold '>T</span>movies </button></Link>
                        </div>


                        <div className='items-center flex flex-row   gap-4 mr-2' >
                            <button className='hover:text-slate-400 text-xl md:text-2xl '><Link to="/account">My account</Link></button>
                            <button onClick={handleLogOut}
                                className='bg-red-600 mr-4 px-2 py-1 text-xl md:text-2xl rounded-xl'><Link to={"/home"}>Logout</Link></button>
                        </div>
                    </div>
                )
                    // de lo contrario mostramos el layout original
                    : (
                        <div className='bg-black text-white flex justify-between items-center text-center p-2 text-2xl  '>
                            <div className='items-center flex flex-row gap-2 p-4'>

                                <button className='text-2xl md:text-3xl lg:text-4xl '> <span className='text-red-600 text-3xl md:text-4xl font-bold '>T</span>movies </button>
                            </div>

                            <div className='items-center flex flex-row   gap-4 mr-2' >
                                <button><Link to={"/login"}>Login</Link></button>
                                <button className='bg-red-600 mr-4 px-2 py-1 text-xl rounded-xl'><Link to={"/signup"}>Sign Up</Link></button>
                            </div>
                        </div>
                    )
                }

            </div>

        </>
    )
}
