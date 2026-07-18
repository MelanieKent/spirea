import { NavLink } from "react-router-dom";
import {
  PrimaryButton,
  SecondaryButton
} from "../components/Button";
import "./styles/Default.css"

export const Hero = () => {
  return (
    <div className="bg-default min-h-screen w-screen px-4 py-28 flex flex-col items-center justify-center">
      <img className="w-screen lg:mb-[-4rem]" src={`${process.env.PUBLIC_URL}/curves.png`} />
      <h1 className="text-3xl sm:text-4xl max-w-[62rem]">An Integrated Construction Operating System for Scalable, Low-Carbon Infrastructure</h1>
      <h4 className="mt-4 mb-12 max-w-[58rem]">A system architecture integrating material systems, advanced manufacturing, and modular deployment into unified construction platform.</h4>
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
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Realized through Prototype V1 - an integrated wall system</p>
        </div>
        <div className="flex gap-2 text-lg">
          <p>Systemized</p>
          <p>•</p>
          <p>Scalable</p>
          <p>•</p>
          <p>Low-Carbon</p>
        </div>
        <div className="flex gap-4 text-lg">
          <p>Resilient</p>
          <p>•</p>
          <p>Rapid</p>
          <p>•</p>
          <p>Distributed</p>
        </div>
      </div>
    </div>
  );
}
