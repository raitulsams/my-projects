import React from 'react';
import { AuthContext } from './AutoContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init.js';

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userInfo = {
        createUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;