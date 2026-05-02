import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Statistics from './components/Statistics';
import Flashcards from './components/Flashcards';
import AIAssistant from './components/AIAssistant';
import CursorGlow from './components/CursorGlow';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-200 selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <BackgroundParticles />
      <CursorGlow />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Statistics />
          <Timeline />
          <Flashcards />
          <AIAssistant />
        </main>

        {/* Futuristic Footer */}
        <footer className="relative z-10 border-t border-white/10 bg-dark-900/80 backdrop-blur-md py-8 text-center mt-20">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="font-bold text-slate-400">Elec<span className="text-cyan-600">Assist</span></span>. 
            Empowering voters through intelligent civic technology.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
