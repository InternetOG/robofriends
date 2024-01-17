import React from 'react';

function Scroll(props)
{
    return( 
        <div className="overflow-y-scroll">
            {props.children}
        </div>
    )
};

export default Scroll;