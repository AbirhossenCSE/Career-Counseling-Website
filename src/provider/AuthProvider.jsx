import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app); 

    const [user, setUser] = useState(null);

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        auth,
        createNewUser,
        userLogin,
        LogOut
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
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
