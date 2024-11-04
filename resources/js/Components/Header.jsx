import React from 'react';
import { Link } from '@inertiajs/react';

function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-[#171717] text-white py-4 px-8 flex justify-between items-center z-50">
        <Link to="/" className="text-2xl font-bold">Inkli</Link>
        <div className="flex items-center align-items:center">
          <input type="text" placeholder="Search" className="absolute bg-[#222222] text-white px-4 py-2 pr-40 rounded-md flex-1"/>
        </div>
        <div>
          <Link to="/create" className="px-4 py-2 rounded-md bg-[#222222] hover:bg-gray-700 mr-2">Create+</Link>
          <Link to="/notifications" className="px-4 py-2 rounded-md bg-[#222222] hover:bg-gray-700 mr-2">little bell(nem találtam)</Link>
          <Link to="/profile" className="px-4 py-2 rounded-md bg-[#222222] hover:bg-gray-700">Name</Link>
        </div>
      </header>
    );
  }  

export default Header;