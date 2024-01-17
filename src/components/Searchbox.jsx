import React from 'react';

function Searchbox( {searchChange} )
{
    return(
        <div className="flex justify-center mb-5 h-8">
            <input className="pl-3 bg-neutral-300 placeholder:text-neutral-600 border-2 border-solid border-neutral-300 focus:outline-2 focus:outline focus:outline-neutral-500" type="search" placeholder='Search here...' onChange={searchChange} />
        </div>
    );
}

export default Searchbox;