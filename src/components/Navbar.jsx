import { NavLink } from "react-router-dom";
import { PrimaryButton } from "./Button";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "underline underline-offset-8 decoration-2"
      : "hover:underline underline-offset-8";

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 xl:px-14 py-6 text-lg backdrop-blur-sm z-[9999]">
        <div className="flex items-center hover:cursor-pointer">
          <img
            className="w-10 xl:w-11"
            src={`${process.env.PUBLIC_URL}/logo-transparent.png`}
          />
          <NavLink className="mx-2" to="/">
            <p className="text-2xl xl:text-3xl">Spirea</p>
            <p className="text-xs xl:text-sm tracking-wide">PLATFORM</p>
          </NavLink>
        </div>
        <div className="hidden xl:flex items-center gap-16">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/prototype-v1" className={linkClass}>Prototype V1</NavLink>
          <NavLink to="/strategic-applications" className={linkClass}>Strategic Applications</NavLink>
          <NavLink to="/founder" className={linkClass}>Founder</NavLink>
          <NavLink to="/contact-us">
            <PrimaryButton>Contact Us</PrimaryButton>
          </NavLink>
        </div>
        <button
          className="xl:hidden flex flex-col gap-1"
          onClick={() => setOpen(true)}
        >
          <span className="w-6 h-[2px] bg-[#404E35]"></span>
          <span className="w-6 h-[2px] bg-[#404E35]"></span>
          <span className="w-6 h-[2px] bg-[#404E35]"></span>
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998]"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-[9999] transform transition-transform duration-300 text-xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="flex flex-col items-start gap-8 px-8 text-xl">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/prototype-v1" className={linkClass} onClick={() => setOpen(false)}>Prototype V1</NavLink>
          <NavLink to="/strategic-applications" className={linkClass} onClick={() => setOpen(false)}>Strategic Applications</NavLink>
          <NavLink to="/founder" className={linkClass} onClick={() => setOpen(false)}>Founder</NavLink>
          <NavLink to="/contact-us" onClick={() => setOpen(false)}>
            <PrimaryButton>Contact Us</PrimaryButton>
          </NavLink>
        </div>
      </div>
    </>
  );
};
