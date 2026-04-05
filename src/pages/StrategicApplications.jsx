export const StrategicApplications = () => {
  return (
    <div
      className="min-h-screen w-screen pt-0 flex flex-col items-center justify-center text-xl p-4"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/strategic-applications-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="flex flex-col items-center justify-center gap-12 max-w-[80rem]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl mt-32 md:mt-0">Strategic Applications</h1>
          <h4>Scalable infrastructure systems designed for resilience, adaptability, and rapid deployment across diverse environments.</h4>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <hr className="border-t border-[#829276] opacity-40 w-full"></hr>
            <h4 className="text-2xl text-nowrap">3 Core Pillars</h4>
            <hr className="border-t border-[#829276] opacity-40 w-full"></hr>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="flex flex-col justify-center items-center gap-2 w-72 md:w-80 bg-[#FAF5F3] rounded-lg hover:bg-[#F1EBE6] p-8 shadow-lg">
              <img className="w-10" src={`${process.env.PUBLIC_URL}/resilient-icon.png`}/>
              <h6>Resilient Infrastructure Systems</h6>
              <hr className="border-t border-[#829276] opacity-40 w-full"></hr>
              <p className="text-base">Designed for performance in demanding climates and conditions.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-72 md:w-80 bg-[#FAF5F3] rounded-lg hover:bg-[#F1EBE6] p-8 shadow-lg">
              <img className="w-10" src={`${process.env.PUBLIC_URL}/rapid-icon.png`}/>
              <h6>Rapid Deployment Frameworks</h6>
              <hr className="border-t border-[#829276] opacity-40 w-full"></hr>
              <p className="text-base">Enabling faster construction cycles through integrated production and modular assembly.</p>             
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-72 md:w-80 bg-[#FAF5F3] rounded-lg hover:bg-[#F1EBE6] p-8 shadow-lg">
              <img className="w-10" src={`${process.env.PUBLIC_URL}/remote-icon.png`}/>
              <h6>Remote & Distributed Development</h6>
              <hr className="border-t border-[#829276] opacity-40 w-full"></hr>
              <p className="text-base">Supporting infrastructure delivery in remote, underserved, and strategic locations.</p>   
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <hr className="border-t border-[#829276] opacity-40"></hr>
          <h4 className="text-2xl">High-Resilience Applications</h4>
          <p>The platform enables infrastructure systems to be deployed across diverse environments — from housing to remote and strategic applications — with consistent performance and reduced construction complexty.</p>
        </div>
      </div>
    </div>
  );
}
