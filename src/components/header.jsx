import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 shadow py-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-4 py-2">
          <p className="text-3xl font-semibold font-serif text-cyan-600">Thoplo-Machine</p>
          <ul className="flex gap-4">
            <li>
              <button className="bg-cyan-600 text-white px-4 py-2 rounded">Login</button>
            </li>
            <li>
              <button className="bg-cyan-600 text-white px-4 py-2 rounded">SIgnup</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
