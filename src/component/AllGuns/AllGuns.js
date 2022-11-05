import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingelGun from '../SingelGun/SingelGun';
import './AllGuns.css'
const AllGuns = () => {
    const [guns, setGuns] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data =>setGuns(data))
    },[])
    
    return (
        <div>
            {
                guns.map(gun => <SingelGun gun={gun} ></SingelGun>)
                
            }
        </div>
    );
};

export default AllGuns;