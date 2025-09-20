
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        조용한 기록소
      </h1>
      <p className="mt-2 text-lg text-gray-400">Your personal application dashboard</p>
    </header>
  );
};

export default Header;
