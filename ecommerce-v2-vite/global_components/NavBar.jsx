import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../global_components/Logo';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  let icon;
  if (isOpen) {
    icon = faTimes;
  } else {
    icon = faBars;
  }

  return (
    <div className="bg-white text-black">
      <div className="flex justify-between items-center p-4 font-Sports">
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="tabletmin:hidden focus:outline-none"
        >
          <FontAwesomeIcon icon={icon} className="w-6 h-6" />
        </button>
        <nav className="hidden tabletmin:flex space-x-4">
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="/movies" className='hover:underline'>Movies</Link>
          <Link to="/contact" className='hover:underline'>Contact Us</Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="tabletmin:hidden">
          <ul className="flex flex-col items-center p-4">
            <li className="p-2">
              <Link to="/" className="font-Sports" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="p-2">
              <Link to="/movies" className="font-Sports" onClick={() => setIsOpen(false)}>Movies</Link>
            </li>
            <li className="p-2">
              <Link to="/contact" className="font-Sports" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
