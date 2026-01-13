import { Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-slate-50 to-stone-100 border-t" style={{
      borderColor: 'rgba(97, 133, 139, 0.2)'
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <p>&copy; 2025 Lantin. All rights reserved.</p>
            <span>|</span>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:underline transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:underline transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Terms of Use
            </button>
            <span>|</span>
            <a
              href="https://instagram.com/lantin.artist"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
