import React,  {useState, useEffect} from 'react';
import Header from './components/Header';
import axios from 'react';


import './App.css';

const App = () => {
  const [items ,setItems] = useState([]);
  const [isLoading, setIsLoading ]  = useState(true);

  useEffect(()=>{
    const fetchItems =  async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/`)

    }

  })

  return (
    <div className="container">

      <Header></Header>
    </div>
  );
}

export default App;
