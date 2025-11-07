import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = React.useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100 bg-opacity-70">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;