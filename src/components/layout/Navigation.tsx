import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import lantinLogo from '../../lantinlogo.png';
import appStoreBadge from '../../icons/app-store-badge.png';
import googlePlayBadge from '../../icons/google-play-badge-new.png';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm" style={{
      borderColor: 'rgba(97, 133, 139, 0.2)'
    }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={lantinLogo} alt="LANTIN Logo" className="w-10 h-10 object-contain" />
          <h1 className="font-bold text-2xl bg-gradient-to-r bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
          }}>
            Lantin
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigate('home')}
            className={`transition-colors ${activeSection === 'home' ? 'font-semibold' : 'text-slate-600'}`}
            style={{ color: activeSection === 'home' ? '#61858b' : undefined }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
            onMouseLeave={(e) => e.currentTarget.style.color = activeSection === 'home' ? '#61858b' : '#475569'}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate('about')}
            className={`transition-colors ${activeSection === 'about' ? 'font-semibold' : 'text-slate-600'}`}
            style={{ color: activeSection === 'about' ? '#61858b' : undefined }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
            onMouseLeave={(e) => e.currentTarget.style.color = activeSection === 'about' ? '#61858b' : '#475569'}
          >
            About
          </button>
          <button
            onClick={() => handleNavigate('team')}
            className={`transition-colors ${activeSection === 'team' ? 'font-semibold' : 'text-slate-600'}`}
            style={{ color: activeSection === 'team' ? '#61858b' : undefined }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
            onMouseLeave={(e) => e.currentTarget.style.color = activeSection === 'team' ? '#61858b' : '#475569'}
          >
            Team
          </button>
          <button
            onClick={() => handleNavigate('contact')}
            className={`transition-colors ${activeSection === 'contact' ? 'font-semibold' : 'text-slate-600'}`}
            style={{ color: activeSection === 'contact' ? '#61858b' : undefined }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
            onMouseLeave={(e) => e.currentTarget.style.color = activeSection === 'contact' ? '#61858b' : '#475569'}
          >
            Contact Us
          </button>
          <div className="flex items-center gap-3">
            <a href="https://apps.apple.com/us/app/lantin/id6756462669" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={appStoreBadge} alt="Download on App Store" className="w-32 h-auto" />
            </a>
            <button onClick={() => alert('Currently unavailable. Coming soon!')} className="hover:opacity-80 transition-opacity">
              <img src={googlePlayBadge} alt="Get it on Google Play" className="w-32 h-auto" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: '#61858b' }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white" style={{ borderColor: 'rgba(97, 133, 139, 0.2)' }}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavigate('home')}
              className={`block w-full text-left py-2 px-4 rounded transition-colors ${activeSection === 'home' ? 'font-semibold bg-stone-50' : 'text-slate-600'}`}
              style={{ color: activeSection === 'home' ? '#61858b' : undefined }}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`block w-full text-left py-2 px-4 rounded transition-colors ${activeSection === 'about' ? 'font-semibold bg-stone-50' : 'text-slate-600'}`}
              style={{ color: activeSection === 'about' ? '#61858b' : undefined }}
            >
              About
            </button>
            <button
              onClick={() => handleNavigate('team')}
              className={`block w-full text-left py-2 px-4 rounded transition-colors ${activeSection === 'team' ? 'font-semibold bg-stone-50' : 'text-slate-600'}`}
              style={{ color: activeSection === 'team' ? '#61858b' : undefined }}
            >
              Team
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`block w-full text-left py-2 px-4 rounded transition-colors ${activeSection === 'contact' ? 'font-semibold bg-stone-50' : 'text-slate-600'}`}
              style={{ color: activeSection === 'contact' ? '#61858b' : undefined }}
            >
              Contact Us
            </button>
            <div className="flex flex-col gap-3 items-center">
              <a href="https://apps.apple.com/us/app/lantin/id6756462669" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={appStoreBadge} alt="Download on App Store" className="w-40 h-auto" />
              </a>
              <button onClick={() => alert('Currently unavailable. Coming soon!')} className="hover:opacity-80 transition-opacity">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="w-40 h-auto" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
