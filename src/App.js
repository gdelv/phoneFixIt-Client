import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Routes } from './routes';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
