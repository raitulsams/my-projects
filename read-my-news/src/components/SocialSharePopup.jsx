import React from 'react';
import { GoShareAndroid } from 'react-icons/go';
import "react-popupify/dist/bundle.css";
import ShareOnSocial from "react-share-on-social";
const SocialSharePopup = () => {
    return (
        <ShareOnSocial
            textToShare="Check out this new wardrobe I just found from IKEA!"
            link="https://ikea.com/wardrobes/kalle"
            linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
            linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
            // linkFavicon={favicon}
            // noReferer
            shareTo={['Facebook', 'Linkedin', 'Reddit', 'Pocket', 'Tumblr', 'Whatsapp', 'Telegram', 'Email']}
            showIcons={true}
        >
            <button className='btn btn-circle'>
                <GoShareAndroid size={18} > </GoShareAndroid>
            </button>
        </ShareOnSocial>

    );
};

export default SocialSharePopup;