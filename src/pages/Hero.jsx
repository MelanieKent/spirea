import { NavLink } from "react-router-dom";
import {
  PrimaryButton,
  SecondaryButton
} from "../components/Button";
import "./styles/Hero.css"

export const Hero = () => {
  return (
    <div className="bg-hero min-h-screen w-screen px-4 py-32 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl">Integrated Platform for High-Resilience Infrastructure</h1>
      <h4 className="mt-4 mb-14">A construction tech platform integrating additive manufacturing bio-based materials, and modular system logic.</h4>
      <div
        className="flex items-center justify-center"
        style={{
          width: "min(50vw, 40vh)",
          aspectRatio: "1 / 1",
          backgroundImage: `url('${process.env.PUBLIC_URL}/cycle.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div>
          <h1 className="text-2xl sm:text-4xl">Spirea</h1>
          <h2 className="text-sm sm:text-xl">PLATFORM</h2>
        </div>
      </div>
      <div className="flex gap-4">
        <p>Resilient</p>
        <p>•</p>
        <p>Rapid</p>
        <p>•</p>
        <p>Distributed</p>
      </div>
      <div className="mt-8 flex gap-4 h-10 sm:h-12 text-xs sm:text-xl">
        <NavLink to="/prototype-v1">
          <PrimaryButton>Explore Prototype V1  →</PrimaryButton>
        </NavLink>
        <NavLink to="/strategic-applications">
          <SecondaryButton>Strategic Application  →</SecondaryButton>
        </NavLink>
      </div>
    </div>
  );
}
