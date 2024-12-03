import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        users,
        loading,
        setUsers,
        createNewUser,
        signInUser,
        GoogleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;