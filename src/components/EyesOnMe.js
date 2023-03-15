// Code EyesOnMe Component Here

import React from 'react';


function EyesOnMe(){
    const handleOnFocus=()=>{
        console.log('Good!')
    }
    const handleBlur =()=>{
        console.log('Hey! Eyes on me!')
    }
    return(
        <div>
            <button onFocus={handleOnFocus} onBlur={handleBlur}>'Eyes on me'</button>
        </div>
    )
}

export default EyesOnMe;