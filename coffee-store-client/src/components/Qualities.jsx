import React from 'react';
import ImgAroma from '../assets/icons/1.png';
import ImgGrades from '../assets/icons/2.png';
import ImgBeans from '../assets/icons/3.png';
import ImgTaste from '../assets/icons/4.png';
const Qualities = () => {
    return (
        <div className='flex justify-center gap-10 bg-[#dfd3a8] px-40 py-10 min-h-72'>
            <div>
                <img src={ImgAroma} alt="Aroma" />
                <h3 className='font-rancho text-[35px] text-[#331A15]'>Awesome Aroma</h3>
                <p className='font-raleway text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={ImgGrades} alt="Grades" />
                <h3 className='font-rancho text-[35px] text-[#331A15]'>High Quality</h3>
                <p className='font-raleway text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={ImgBeans} alt="Beans" />
                <h3 className='font-rancho text-[35px] text-[#331A15]'>Pure Grades</h3>
                <p className='font-raleway text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={ImgTaste} alt="Taste" />
                <h3 className='font-rancho text-[35px] text-[#331A15]'>Proper Roastng</h3>
                <p className='font-raleway text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Qualities;