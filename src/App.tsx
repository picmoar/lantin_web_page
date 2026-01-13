import { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleSectionChange} />

      {/* Content */}
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'team' && <Team onNavigate={handleSectionChange} />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'privacy' && <Privacy onNavigate={handleSectionChange} />}
      {activeSection === 'terms' && <Terms onNavigate={handleSectionChange} />}

      <Footer onNavigate={handleSectionChange} />
    </div>
  );
}
