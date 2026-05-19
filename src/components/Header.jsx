import { Link } from 'react-router-dom';
import arbiLogo from '../assets/ArbiNewLogo.png';

export default function Header() {
  const links = [
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'Books', path: '/#books' },
    { label: 'Reviews', path: '/#reviews' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="no-underline flex items-center">
          <img src={arbiLogo} alt="Arbi" className="h-12 w-auto" />
        </Link>
        <div className="flex gap-6 md:gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className="no-underline font-bold text-sm md:text-base transition-colors duration-200 hidden md:block"
              style={{ color: '#374151' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1E90FF'}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 text-white font-extrabold rounded-xl text-sm hover:opacity-90 transition-all"
            style={{ backgroundColor: '#1E90FF' }}
          >
            Buy on Amazon
          </a>
        </div>
      </nav>
    </header>
  );
}
