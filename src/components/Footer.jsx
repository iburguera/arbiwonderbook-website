import { Link } from 'react-router-dom';
import arbiLogo from '../assets/ArbiNewLogo.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={arbiLogo} alt="Arbi" className="h-10 w-auto mb-3" />
            <p className="text-sm text-gray-600">
              Augmented Reality books for children in 8 languages.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="no-underline text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/blog" className="no-underline text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/faq" className="no-underline text-gray-600 hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="no-underline text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="no-underline text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="btn-primary block text-center">
              View on Amazon
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Arbi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
