import { Link } from 'react-router-dom';
import arbiLogo from '../assets/ArbiNewLogo.png';
import amazonWhiteIcon from '../assets/amazon-white-icon.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            <div className="flex flex-col gap-2">
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white font-extrabold rounded-xl text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#1E90FF' }}
              >
                <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                Get Book 1
              </a>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white font-extrabold rounded-xl text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#32CD32' }}
              >
                <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                Get Book 2
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} ARBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
