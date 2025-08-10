import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Registration />
        <Rules />
      </main>
      <Footer />
    </div>
  );
}

export default App;
