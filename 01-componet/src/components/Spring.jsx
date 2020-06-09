import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
    const [isToggled, setToggle]=useState(false);
    const fade = useSpring({
        opacity: isToggled ? 1 : 0,
        color: isToggled ? 'tomato' : 'green',
        fontSize: isToggled ? '2rem' : '5rem'
    });



    return(

        <div>
            <animated.h1 style={fade}>Hello man</animated.h1>
            <button onClick={()=> setToggle(!isToggled)} >
                Toggel
            </button>
        </div>
    );
};

export default Toggle;





