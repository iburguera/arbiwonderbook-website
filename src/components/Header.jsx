import { Link } from 'react-router-dom';

export default function Header() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/" className="no-underline text-gray-900">
            Arbi
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="no-underline text-gray-900 hover:text-blue-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
