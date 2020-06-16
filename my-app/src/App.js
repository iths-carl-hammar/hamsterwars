import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';

function App() {
  const [hamster, setHamster] = useState(null);
   const handleClick = () =>{
   let array =   getBild();
   setHamster(array);
   }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/user">User</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/user" component={User} ></Route>
          </Switch>

        </div>

        
       
      
      </header>
      <div>
        <button onClick={handleClick}>Get hamster</button>
      </div>
    </div>
    </Router>
  );
}

async function getBild(){
  let baseUrl = '/';
 const response = await fetch('/');

 const hamsterArray = await response.json();
 return hamsterArray;
}

export default App;
