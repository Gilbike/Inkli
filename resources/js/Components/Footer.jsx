import React from 'react';
import { Link } from '@inertiajs/react';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white   
 py-4 text-center border-t border-gray-700">
      <p>
        <Link to="/about" className="hover:underline">About Us</Link> <span className="inline-block w-2 h-2 rounded-full bg-white mx-2 mb-1"></span> 
        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> <span className="inline-block w-2 h-2 rounded-full bg-white mx-2 mb-1"></span> 
        ©2024 Inkli
      </p>
    </footer>
  );
}

export default Footer;