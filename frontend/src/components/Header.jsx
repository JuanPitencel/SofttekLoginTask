import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../assets/LogoSofttek.png';

const Header = () => {
  return (
    <header className="px-4 py-3 bg-[rgba(250, 250, 250)] opacity-75 font-raleway font-arial ">
      <div className="md:flex md:justify-between">
        <img src={logo} alt="logo" className="h-20 ml-9" />

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            type="button"
            className="flex items-center bg-slate-600 px-7 py-2  uppercase font-raleway font-arial text-white text-center rounded cursor-pointer hover:bg-slate-900 transition-colors"
          >
            Buscar Proyecto
          </button>
          <Link
            to="/proyectos"
            className="flex items-center bg-slate-600 px-7 py-2  uppercase font-raleway font-arial text-white text-center rounded cursor-pointer hover:bg-slate-900 transition-colors"
          >
            Proyectos
          </Link>

          <button
            type="button"
            className="flex items-center bg-slate-600 px-7 py-2  uppercase font-raleway font-arial text-white text-center rounded cursor-pointer hover:bg-slate-900 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
