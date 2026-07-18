import "./styles/Default.css"

export const PrototypeV1 = () => {
  return (
    <>
      <div className="bg-default min-h-screen w-screen flex flex-col items-center justify-center text-left px-4 py-32">
        <img className="w-screen lg:mb-[-4rem]" src={`${process.env.PUBLIC_URL}/curves.png`} />
        <div className="flex flex-col items-start justify-center md:gap-12">
          <div className="flex flex-col gap-6">
            <h4>PROTOTYPE V1</h4>
            <h1 className="text-3xl sm:text-4xl">Integrated Wall System <br />for Modular, Low-Carbon Construction</h1>
            <div className="flex flex-col gap-4 max-w-[40rem]">
              <p>Prototype V1 is an integrated wall system combining additive construction, bio-based insulation, and modular assembly within a unified construction logic.</p>
              <p>It enables scalable production, high-performance building envelopes, and flexible deployment across multiple construction contexts.</p>
            </div>
          </div>
          <div className="w-[100%] flex justify-center">
            <img className="w-80" src={`${process.env.PUBLIC_URL}/wall-system.png`}/>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
                <div className="flex flex-col justify-center items-center gap-2 w-72 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <img className="w-12" src={`${process.env.PUBLIC_URL}/additive-icon.png`}/>
                  <h6>Additive Structure</h6>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-72 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <img className="w-12" src={`${process.env.PUBLIC_URL}/bio-icon.png`}/>
                  <h6>Bio-Based Insulation</h6>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-72 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <img className="w-12" src={`${process.env.PUBLIC_URL}/modular-icon.png`}/>
                  <h6>Modular Assembly</h6>
                </div>
              </div>
            </div>
            <p className="min-width text-center sm:text-left">Prototype V1 represents the first realization of the Spirea Platform - translating integrated material systems, <br />production systems, and deployment systems into a deployable construction framework. </p>
          </div>
        </div>
      </div>
    </>
  );
}
