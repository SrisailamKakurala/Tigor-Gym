import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-white font-bold text-xl">TIGER GYM</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/classes" className="nav-link">Classes</Link>
              <Link to="/trainers" className="nav-link">Trainers</Link>
              <Link to="/membership" className="nav-link">Membership</Link>
            </div>
          </div>
          
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary/95 backdrop-blur-sm">
          <Link to="/" className="block px-3 py-2 text-white hover:bg-primary/20 rounded-md" onClick={toggleMenu}>Home</Link>
          <Link to="/classes" className="block px-3 py-2 text-white hover:bg-primary/20 rounded-md" onClick={toggleMenu}>Classes</Link>
          <Link to="/trainers" className="block px-3 py-2 text-white hover:bg-primary/20 rounded-md" onClick={toggleMenu}>Trainers</Link>
          <Link to="/membership" className="block px-3 py-2 text-white hover:bg-primary/20 rounded-md" onClick={toggleMenu}>Membership</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;