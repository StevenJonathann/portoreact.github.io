import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div className="navbar py-12 flex items-center justify-between">
      <div className="logo text-3xl font-bold">
        <h1>Portofolio</h1>
      </div>
      <div className="navlist">
        <ul className="flex gap-10 pr-8">
          <li>
            <a href="#" className="text-lg ">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Proyek
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
