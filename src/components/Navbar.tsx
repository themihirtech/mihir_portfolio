import { useState, useEffect, useContext } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGalleryClick = () => navigate('/gallery');
  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/', {
        state: {
          scrollToContact: true
        }
      });
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({
        behavior: 'smooth'
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleHomeClick = () => navigate('/');
  const handleWorkClick = () => {
    navigate('/');
    setTimeout(() => {
      const workSection = document.getElementById('work');
      workSection?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleResumeClick = () => navigate('/resume');

  return <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg bg-transparent rounded-full">
      <div className="rounded-full bg-transparent px-[24px]">
        <div className="flex items-center justify-between h-16 rounded-full bg-inherit">
          <div className="flex items-center space-x-4">
            <img alt="Logo" className="w-10 h-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all cursor-pointer" onClick={handleHomeClick} src="/public/lovable-uploads/Mlogo.webp" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer" onClick={handleHomeClick}>
              Mihir Mondal
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={handleWorkClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={handleGalleryClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={handleResumeClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Resume
            </button>
            <button onClick={handleContactClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-500 hover:text-yellow-400 transition-colors" /> : <Moon className="h-5 w-5 text-blue-500 hover:text-blue-400 transition-colors" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-500 hover:text-yellow-400 transition-colors" /> : <Moon className="h-5 w-5 text-blue-500 hover:text-blue-400 transition-colors" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-full text-gray-700 dark:text-gray-300">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <div className="md:hidden px-6 py-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-4">
            <button onClick={handleWorkClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-left">
              Work
            </button>
            <button onClick={handleGalleryClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-left">
              Gallery
            </button>
            <button onClick={handleResumeClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-left">
              Resume
            </button>
            <button onClick={handleContactClick} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-left">
              Contact
            </button>
          </div>
        </div>}
    </nav>;
};

export default Navbar;
