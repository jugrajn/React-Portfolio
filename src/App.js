import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HeroJumbo from './components/Header';
import Projects from './components/Portfolio';
import Tech from './components/Resume';
import Contact from './components/Contact'


function App() {
 
  return (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HeroJumbo} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Tech' component={Tech} />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
