import React, { Component } from 'react';
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from './NotFound';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className='App'>
                    <h1>A Simple SPA made using React</h1>
                    <ul className='header'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                    <div className='content'>
                        <Routes>
                            <Route exact path='/' Component={Home} />
                            <Route path='/about' Component={About} />
                            <Route path='/contact' Component={Contact} />
                            <Route path='*' Component={NotFound} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;