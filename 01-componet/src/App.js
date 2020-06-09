import React, { useState } from 'react';
import './App.css';
import VeggieList from './components/VeggieList';
import Bordered from './components/Bordered';
import Login from './components/Login';
import UserStatus from './components/UserStatus';
 import Effect from './components/Effect';
 //import Clock from './components/Clock';
 import EffectButton from './components/EffectButton';
 import TestApi from './components/TestApi';
 //import Tag from './components/Tag';
 import Spring from './components/Spring';
 import Loading from './components/Loading';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
        <header className="App-header">
            <h1>
                Demo
            </h1>
            <Login
                isLoggedIn={isLoggedIn}
                doLogIn={() => setIsLoggedIn(true)}
                doLogOut={() => setIsLoggedIn(false)} />
        </header>
        <main>
            <Bordered>
                <VeggieList />
            </Bordered>
            <Bordered> test </Bordered>
            <UserStatus isLoggedIn={isLoggedIn} />
        </main>
       
        <section>
         <Effect></Effect>
        </section>
        <section>
          <EffectButton></EffectButton>
        </section>
        <section>
          <TestApi></TestApi>
        </section>
         <Spring></Spring>
         
        </div>
        
    );
}

export default App;