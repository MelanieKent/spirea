import { PrimaryButton } from "./Button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between px-14 py-8 text-lg backdrop-blur-sm z-[9999]">
      <div className="flex justify-center items-center">
        <img src={`${process.env.PUBLIC_URL}/logo-transparent.png`} className="w-12"/>
        <div className="mx-2">
          <p className="text-3xl">Spirea</p>
          <p className="text-sm opacity-80 tracking-widest">PLATFORM</p>
        </div>
      </div>
      <div className="flex items-center gap-14">
        <p>About</p>
        <p>Prototype V1</p>
        <p>Strategic Application</p>
        <p>Founder</p>
        <PrimaryButton>Contact Us</PrimaryButton>
      </div>
    </div>
  );
}