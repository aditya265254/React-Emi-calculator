import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/carlogo.png'

const Nav = () => {
  return (
    <div className="flex items-center justify-between pt-4 border-b border-zinc-400 shadow">
      <div className="flex items-center">
        <img className="w-14 pr-2 rounded-full" src={logo} alt="logo" />
        <h1 className="text-zinc-700 font-bold leading-none">
          Smart Travel <br />
          <span>Calculator</span>
        </h1>
      </div>

      <nav className="flex gap-20  items-center">
        <Link className="text-zinc-700 font-bold leading-none" to="/">
          Home
        </Link>
        <Link className="text-zinc-700 font-bold leading-none" to="/calculator">
        EMI Calculator
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
