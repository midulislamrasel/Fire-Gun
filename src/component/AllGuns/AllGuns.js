import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingelGun from '../SingelGun/SingelGun';
import './AllGuns.css'
const AllGuns = ({countAdd}) => {
    const [guns, setGuns] = useState();
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data =>setGuns(data))
            // .then(data =>console.log(data))
    },[])
    
    return (
        <div>
            <div className='mb-7'>
            <h1 className='text-center mt-4 text-4xl'>Welcome to Fire Guns</h1>
            <p className='text-center mt-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores libero ad assumenda dignissimos quam rerum voluptatibus ducimus repellat eaque pariatur maiores, maxime mollitia iure molestias consequatur recusandae. Earum, consectetur.</p>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                guns?.map(gun => <SingelGun gun={gun} key={gun.id} countAdd = {countAdd}></SingelGun>)
            }
        </div>
        </div>
    );
};

export default AllGuns;