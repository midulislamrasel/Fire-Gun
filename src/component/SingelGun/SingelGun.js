import React from 'react';
import './SingelGun.css'

const SingelGun = (props) => {
    const { id, name, img, bullet, capacity, action, price, category } = props.gun;
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Bullet : {bullet}</p>
                    <p>Capacity : {capacity}</p>
                    <p>Action : {action}</p>
                    <p>Category : {category}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelGun;