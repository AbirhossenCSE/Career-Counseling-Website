import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app); 
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (UpdatedData) =>{
        return updateProfile(auth.currentUser, UpdatedData);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = {
        user,
        setUser,
        auth,
        createNewUser,
        userLogin,
        LogOut,
        loading,
        updateUserProfile,
        signInWithGoogle
        
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    }, []);
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
