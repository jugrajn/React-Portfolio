import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HeroJumbo from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Portfolio';
import Tech from './components/Resume';
import Contact from './components/Contact'


function App() {
 
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HeroJumbo} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Tech' component={Tech} />
        <Route path='/Contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
