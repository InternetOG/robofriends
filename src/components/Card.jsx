import React from 'react';
import 'animate.css';

function Card({id, name, email})
{
    return(
        <div className='text-center flex flex-col justify-center bg-neutral-100 py-8'>
            <div className='flex justify-center'>
                <img src={`https://robohash.org/${id}?set=set5&size=200x200`} alt="Human3D" />
            </div>
            <div className='pt-5'>
                <h1 className='text-xl pb-1 text-neutral-700'>{name}</h1>
                <p className='  text-neutral-500'>{email}</p>
            </div>
        </div>
    );
} 

export default Card;