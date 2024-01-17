import React from 'react';
// import { robots } from './assets/robot';
import Card from './Card';

function Cardlist({ robots })
{
    const robotArr = robots.map((robot) => {
        return(
            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        )
    })
    return(
        <div className='flex flex-wrap justify-center items-center gap-6 drop-shadow-xl'>
            {robotArr}
        </div>
    );
}

export default Cardlist;