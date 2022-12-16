import { createContext, useContext } from 'react';
//traemos el servicio auth q creamos en firebase
import { auth } from '../services/firebase/firebase';
//traemos los metodos que necesitamos de firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

//creamos el context
const AuthContext = createContext();

//creamos el provider
export function AuthContextProvider({ children }) {
    //estado para manejar el usuario
    const [user, setUser] = useState({});

    //function para crear el user
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    //cuando se monta el componente creamos un metodo que capte cuando el authstate cambie y setee un
    //nuevo usuario que se acaba de logear
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        //este es un metodo para cancelar la suscripcion
        return () => {
            unsubscribe();
        }

    }, [])

    //desestructruamos todos los valores de los metodos y los pasamos como value
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}
//utilizamos el contexto
export function UserAuth() {
    return useContext(AuthContext)
}