import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state changed. Current user:', currentUser);
            // This will now correctly handle both sign-in and sign-out
            setUser(currentUser);
            setLoading(false);
        });

        // Correct: Cleanup function is returned by useEffect
        return () => {
            unSubscribe();
        }
    }, []);

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const userInfo = {
        createUser, signInUser, user, signOutUser, setUser, loading
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;