import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-red-700 selection:text-white">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}

export default App;