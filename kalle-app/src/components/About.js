import react, { useState,useEffect } from 'react';
import axios from 'axios';


const About = ()=>{
    const [resouces, setResources] = useState([]);

    const fetchResource = async (resouces)=>{
        const response = await axios.get(
            `https://jsonplaceholder.typecode.com/${resouces}`
        );

        setResources(response.data);
        


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