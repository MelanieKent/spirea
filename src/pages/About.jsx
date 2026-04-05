import {
  PrimaryButton,
  SecondaryButton
} from "../components/Button";

export const About = () => {
  return (
    <>
      <div
        className="min-h-[90vh] w-screen flex flex-col items-center justify-center px-4 py-32"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/about-background-p1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-left flex flex-col gap-8 max-w-[60rem]">
          <h1 className="text-3xl sm:text-4xl">
            A Scalable Construction Platform for Modular, Low-Carbon Infrastructure
          </h1>
          <p>Spirea Platform is a construction technology platform integrating modular construction logic, additive manufacturing, and bio-based material systems.</p>
          <p>The platform is designed to enable scalable, resilient, and low-carbon infrastructure across diverse environments - from housing to remote and strategic applications.</p>
          <div className="mt-8 flex gap-4 h-10 sm:h-12 text-xs sm:text-xl">
            <PrimaryButton>Explore Prototype V1  →</PrimaryButton>
            <SecondaryButton>Strategic Application  →</SecondaryButton>
          </div>
        </div>
      </div>
      <div
        className="min-h-[50vh] w-screen flex flex-col items-center justify-center gap-32 px-4 py-24"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/about-background-p2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
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
