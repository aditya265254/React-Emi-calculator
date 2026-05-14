import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/carlogo.png";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
    <div className="flex items-center justify-between pt-4 border-b border-zinc-400 shadow">
      {/* Logo and name  */}
      <div className="flex items-center">
        <img className="w-14 pr-2 rounded-full" src={logo} alt="logo" />
        <h1 className="text-zinc-700 font-bold leading-none">
          Smart Travel <br />
          <span>Calculator</span>
        </h1>
      </div>

      <nav className="hidden md:flex gap-20  items-center">
        <Link className="text-zinc-700 font-bold leading-none" to="/">
          Home
        </Link>
        <Link className="text-zinc-700 font-bold leading-none" to="/calculator">
          EMI Calculator
        </Link>
      </nav>
      <button
        className="md:hidden  text-zinc-700"
        onClick={() => setIsopen(!isopen)}
      >
        {isopen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
        {isopen && (
    <nav className="md:hidden flex flex-col gap-4 px-6 py-4">
      <Link className="text-zinc-700 font-bold"
       to='/' onClick={()=>setIsopen(false)}>Home</Link>
      <Link className="text-zinc-700 font-bold"
       to='/calculator' onClick={()=>setIsopen(false)}>EMI</Link>
    </nav>
        )}
    </>
  );
};

export default Nav;
