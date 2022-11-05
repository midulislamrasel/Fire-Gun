import React from 'react';
import './SingelGun.css'

const SingelGun = (props) => {
    const {countAdd,gun} = props;

    const { id, name, img, bullet, capacity, action, price, category } = gun;
    
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img className='w-80 h-80' src={img} alt="Shoes" /></figure>
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
                    <div className="card-actions">
                        <button onClick={()=>countAdd()} className="btn btn-sm btn-info">Add to Card</button>
                        <button className="btn btn-sm btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelGun;