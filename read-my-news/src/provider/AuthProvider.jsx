import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookmarkedNews, setBookmarkedNews] = useState([]);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // if (currentUser) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = currentUser.uid;
            //     // ...
            //     console.log('Auth State Changed', currentUser, uid);
            //     setUser(currentUser);
            //     setLoading(false);
            // } else {
            //     console.log('No user is signed in.. from Authprovider');
            // }
        });
        return () => {
            unSubscribe();
        }
    });

    const logOut = () => {
        return signOut(auth)
    }


    // Bookmarks 
    const handleBookmark = (news) => {
        const notify = (msg) => {
            toast.dismiss(); // Dismiss any existing toast
            toast(msg);
        };
        const isBookmarked = bookmarkedNews.some(item => item.id === news.id);
        setBookmarkedNews(prev => {
            if (isBookmarked) {
                notify("You un-bookmarked this news ☹️");
                return prev.filter(item => item.id !== news.id);
            } else {
                notify("Successfully bookmarked this news 😀");
                return [...prev, news];
            }
        });
    };
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signInUser,
        loading,
        setLoading,
        updateUserProfile,
        handleBookmark,
        bookmarkedNews,
        setBookmarkedNews
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;