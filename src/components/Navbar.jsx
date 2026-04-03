import { NavLink } from "react-router-dom";
import { PrimaryButton } from "./Button";

export const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "underline underline-offset-8 decoration-2" : "hover:underline underline-offset-8";

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between px-14 py-8 text-lg backdrop-blur-sm z-[9999]">
      <div className="flex justify-center items-center hover:cursor-pointer">
        <img
          src={`${process.env.PUBLIC_URL}/logo-transparent.png`}
          className="w-12"
        />
        <NavLink className="mx-2" to="/">
          <p className="text-3xl">Spirea</p>
          <p className="text-sm tracking-wide">PLATFORM</p>
        </NavLink>
      </div>
      <div className="flex items-center gap-14">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/prototype-v1" className={linkClass}>Prototype V1</NavLink>
        <NavLink to="/strategic-applications" className={linkClass}>Strategic Applications</NavLink>
        <NavLink to="/founder" className={linkClass}>Founder</NavLink>
        <NavLink to="/contact-us">
          <PrimaryButton>Contact Us</PrimaryButton>
        </NavLink>
      </div>
    </div>
  );
};
