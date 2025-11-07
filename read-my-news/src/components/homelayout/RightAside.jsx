import React, { useContext } from 'react';
import SocialLogin from './SocialLogin';
import SocialLinks from './SocialLinks';
import Qzone from './Qzone';
import Blankbg from './Blankbg';
import { AuthContext } from '../../provider/AuthProvider';

const RightAside = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                !user && <SocialLogin></SocialLogin>
            }
            <SocialLinks></SocialLinks>
            <Qzone></Qzone>
            <Blankbg></Blankbg>
        </div>
    );
};

export default RightAside;