import react, { useState,useEffect } from 'react';
import axios from 'axios';


const About = ()=>{
    const [resouces, setResources] = useState([]);

    const fetchResource = async ()=>{
        const response = await axios.get(
            ``
        );
        


    }

     return(
         <div>
              {}
         </div>
     )
    
}

export default About;