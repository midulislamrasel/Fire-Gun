import React from 'react';
import './SingelGun.css'

const SingelGun = (props) => {
    const { id, name, img, bullet, capacity, action, price, category } = props.gun;
    
    return (
        <div>
            <h1 className='text-center text-4xl'>Text</h1>
        </div>
    );
};

export default SingelGun;