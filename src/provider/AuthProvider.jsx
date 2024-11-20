import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const authInfo = {
        user,
        setUser,
        auth,
        createNewUser,
        userLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
