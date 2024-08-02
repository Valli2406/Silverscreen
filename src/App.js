import React from 'react';
import './app.css';
import Home from './components/Home';
import TopNav from './components/Navbar';
import Footer from './components/Footer';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return <>
      <TopNav></TopNav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<SingleMovie/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
}

export default App; 