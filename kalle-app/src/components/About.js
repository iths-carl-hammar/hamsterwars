import react, { useState,useEffect } from 'react';
import axios from 'axios';


const About = ()=>{
    const [resouces, setResources] = useState([]);

    const fetchResource = async ()=>{
        const response = await axios.get(
            ``
        );
        


    };

    useEffect(()=>{
           fetchResource(resouces);
    },[])

     return(
         <div>
              {resouces.length}
         </div>
     )
    
}

export default About;