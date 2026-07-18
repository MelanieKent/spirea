import { NavLink } from "react-router-dom";
import {
  PrimaryButton,
  SecondaryButton
} from "../components/Button";
import "./styles/Default.css"

export const About = () => {
  return (
    <>
      <div className="bg-default min-h-screen w-screen flex flex-col items-center justify-center px-4 py-28">
        <img className="w-screen lg:mb-[-4rem]" src={`${process.env.PUBLIC_URL}/curves.png`} />
        <div className="text-left flex flex-col gap-8 max-w-[60rem]">
          <h1 className="text-3xl sm:text-4xl">
            An Integrated Construction Operating System for Scalable, Low-Carbon Infrastructure
          </h1>
          <p>Spirea Platform is an integrated construction technology ecosystem combining modular design logic, additive manufacturing, and bio-based materials systems.</p>
          <p>Rather than a sequence of isolated activities, construction is approached as an integrated system - where materials, production and assembly are designed to operate as one. Yet construction today remain fragmented, slow, and difficult to scale - reliant on project-based workflows rather than systemized production.</p>
          <p>This enables faster delivery, greater consistency, and significantly reduced carbon impact.</p>
          <div className="mt-8 flex gap-4 h-10 sm:h-12 text-xs sm:text-xl">
            <NavLink to="/prototype-v1">
              <PrimaryButton>Explore Prototype V1  →</PrimaryButton>
            </NavLink>
            <NavLink to="/strategic-applications">
              <SecondaryButton>Strategic Application  →</SecondaryButton>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[#FBF6E3] min-h-[50vh] w-screen flex flex-col items-center justify-center gap-24 px-4 py-24">
        <div className="flex flex-col gap-6 max-w-[60rem]">
          <h1 className="text-3xl sm:text-4xl">Rethinking Construction as a System</h1>
          <p>The built environment is under increasing pressure to deliver at scale while reducing carbon and improving resilience.</p>
          <p>Spirea addresses this challenge by treating construction as an integrated system - combining material innovation, controlled production, and modular deployment into a unified approach.</p>
        </div>
        <div className="flex gap-4">
          <p>Resilient</p>
          <p>•</p>
          <p>Rapid</p>
          <p>•</p>
          <p>Distributed</p>
        </div>
      </div>
    </>
  );
}
