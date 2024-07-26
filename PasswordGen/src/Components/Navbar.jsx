import React from 'react';

function Navbar() {
  return (
    <div className="w-full h-16 flex items-center bg-slate-500 shadow-md">
      <div className="flex items-center">
        <img
          className="h-10 mx-4"
          src="https://i.pinimg.com/originals/41/1a/48/411a4835d38ff899e55ce2802b08329c.jpg"
          alt="img.jpg"
        />
      </div>
      <div className="flex-1">
        <ul className="flex justify-end items-center space-x-5 mr-6">
          <li>
            <a
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-sm"
              href="/home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-sm"
              href="/PasswordGenrator"
            >
              PasswordGen
            </a>
          </li>
          <li>
            <a
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-sm"
              href="/about"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
