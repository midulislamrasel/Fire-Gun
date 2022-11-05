import React from 'react';

const SingelGun = (props) => {
    const { id, name, img, bullet, capacity, action, price, category } = props.gun;
    return (
        <div>
            <p>id : {id}</p>
            <p>name : {name}</p>
        </div>
    );
};

export default SingelGun;