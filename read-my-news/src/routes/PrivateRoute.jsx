import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log('Private Route Location:', location.state);
    // console.log('Private Route Location Pathname:', location.pathname);
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/login" replace></Navigate>
    }
    else {
        return children;
    }

    // return children;
}

export default PrivateRoute;