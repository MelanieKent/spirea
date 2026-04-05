export const Founder = () => {
  return (
    <div
      className="min-h-screen w-screen pt-0 flex flex-col items-center justify-center text-xl gap-48 p-4"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/founder-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] max-w-[80rem] text-left mt-32 md:mt-0">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl">
              Julia Liu
            </h1>
            <p>Founder</p>
          </div>
          <h4 className="text-2xl italic">Building next-generation systems for resilient, low-carbon infrastructure</h4>
          <p>Julia Liu brings together global experience in system integration across construction, supply chains, and large-scale infrastructure - operating at the intersection of material flows, production systems, and deployment.</p>
          <p>Her work focuses on developing integrated construction platforms that enable scalable, resilient, and low-carbon deployment.</p>
          <p>Spirea Platform reflects a long-term vision to transform construction into a systemized, scalable, and climate-aligned industry - enabling deployment across diverse environments and applications.</p>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-64 py-8" src={`${process.env.PUBLIC_URL}/headshot.png`} />
        </div>
      </div>
      <p className="italic">A platform for the next generation of infrastructure.</p>
    </div>
  );
}
