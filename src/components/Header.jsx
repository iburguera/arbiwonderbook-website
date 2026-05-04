import { Link } from 'react-router-dom';

export default function Header() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      {/* Banner en construcción — fuera del sticky */}
      <div className="w-full text-center text-sm font-semibold text-white py-2 px-4" style={{ background: 'linear-gradient(90deg, #1E90FF 0%, #32CD32 35%, #FFD700 65%, #FF8C00 100%)' }}>
        🚧 Website under construction — coming soon! 🚧
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="no-underline flex items-center">
            <img src="/ArbiNewLogo.webp" alt="Arbi" className="h-12 w-auto" />
          </Link>
          <div className="flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="no-underline font-semibold transition-colors duration-200"
                style={{ color: '#1E90FF' }}
                onMouseEnter={e => e.target.style.color = '#FF8C00'}
                onMouseLeave={e => e.target.style.color = '#1E90FF'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
