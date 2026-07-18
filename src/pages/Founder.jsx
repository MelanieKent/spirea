import "./styles/Default.css"

export const Founder = () => {
  return (
    <div className="bg-default min-h-screen w-screen flex flex-col items-center justify-center py-32">
      <img className="w-screen lg:mb-[-4rem]" src={`${process.env.PUBLIC_URL}/curves.png`} />
      <div className="w-screen flex flex-col items-center justify-center gap-12 sm:gap-18 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] max-w-[80rem] text-left">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl">
                Julia Liu
              </h1>
              <p>Founder</p>
            </div>
            <h4 className="text-2xl italic">Building next-generation systems for resilient, low-carbon infrastructure</h4>
            <p>Julia Liu works at the intersection of material systems, production, and deployment - the same integrated logic that defines Spirea Platform.</p>
            <p>Her background spans 26 years in global agricultural commodity systems, with leadership roles across integrated supply chains at Cargill, ADM, and Bunge across multiple continents.</p>
            <p>She is a licensed builder in British Columbia and holds a PhD in the Built Environment, with research focuses on bio-based material substitution and low-carbon construction systems.</p>
            <p>Her work centers on a system view of construction - connecting materials, manufacturing, and assembly into a unified logic for scalable deployment, consistent with the platform's approach to construction as an integrated system rather than a sequence of isolated processes.</p>
            <p>This approach is currently being realized through Prototype V1 - an integrated wall system combining additive construction, bio-based insulation, and modular assembly.</p>
            <p>Spirea Platform reflects a long-term vision to transform construction into a systemized, scalable, and climate-aligned industry - enabling deployment across diverse environments and applications.</p>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-64 py-8" src={`${process.env.PUBLIC_URL}/headshot.png`} />
          </div>
        </div>
        <p className="italic">A platform for the next generation of infrastructure.</p>
      </div>
    </div>
  );
}
