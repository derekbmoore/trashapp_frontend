import React from 'react';

function Navbar() {
  return (
    <nav style={{background:'#758C3A'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-semibold text-xl -ml-28">TrashApp</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* <a href="#home" className="text-white hover:bg-white hover:text-green-800 px-2 py-1 rounded-md text-lg font-medium">Home</a> */}
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
