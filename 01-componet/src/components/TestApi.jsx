import React,  {useState, useEffect } from 'react';

import '../components/Art.css';

const Notify = ()=>{

    const [data, setData]= useState([]);
      
    useEffect( ()=>{
        loadData()
    },[]);
    
    const loadData = async ()=>{
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(receivedData => setData(receivedData))
    }
      
     

    
    return(
        <div className="">
            <button className="btn"></button>
            <p>Fetch</p>
            {data.map(user => ( 
                <div key={user.id}>{user.name}</div>

            ))}
       
    </div>
    );
    
}

export default Notify;