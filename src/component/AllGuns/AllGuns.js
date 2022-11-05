import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingelGun from '../SingelGun/SingelGun';
import './AllGuns.css'
const AllGuns = () => {
    const [guns, setGuns] = useState();
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data =>setGuns(data))
            // .then(data =>console.log(data))
    },[])
    
    return (
        <div className='all_guns'>
            <h1 className='text-center mt-4 text-4xl'>Welcome to Fire Guns</h1>
            <p className='text-center mt-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores libero ad assumenda dignissimos quam rerum voluptatibus ducimus repellat eaque pariatur maiores, maxime mollitia iure molestias consequatur recusandae. Earum, consectetur.</p>
            {
                guns?.map(gun => <SingelGun gun={gun} key={gun.id}></SingelGun>)
            }
        </div>
    );
};

export default AllGuns;