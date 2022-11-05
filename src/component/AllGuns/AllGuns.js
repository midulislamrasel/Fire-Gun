import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './AllGuns.css'
const AllGuns = () => {
    const [gun, setGun] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data =>console.log(data))
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default AllGuns;