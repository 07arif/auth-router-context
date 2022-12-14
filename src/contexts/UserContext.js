import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)


const UserContext = ({ children }) => {
    //default user name:
    // const user = {displayName:'arif'}
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    // create account :
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signIn with email and password:
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google signIN
    const signInWithGoogle = () => {
       return signInWithPopup(auth, provider)
            
    }

    // looOut:
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('auth state changed', currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user,loading, createUser, SignIn, logOut, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;