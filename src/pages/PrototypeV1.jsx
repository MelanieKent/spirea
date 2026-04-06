import "./styles/PrototypeV1.css"

export const PrototypeV1 = () => {
  return (
    <>
      <div className="bg-prototype-v1 min-h-screen w-screen flex flex-col items-center justify-center text-left px-4 py-32">
        <div className="flex flex-col items-start justify-center md:gap-44">
          <div className="flex flex-col gap-6">
            <h4>PROTOTYPE V1</h4>
            <h1 className="text-3xl sm:text-4xl">Integrated Wall System <br />for Modular, Low-Carbon Construction</h1>
            <div className="flex flex-col gap-4 max-w-[40rem]">
              <p>Prototype V1 is an integrated wall system combining additive construction, bio-based insulation, and modular assembly within a unified construction logic.</p>
              <p>The system is designed to enable scalable production, deliver strong climate performance, and support multiple deployment methods.</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
                <div className="flex flex-col justify-center items-center gap-2 w-72 bg-[#FAF5F3] rounded-lg hover:bg-[#F1EBE6] p-8 shadow-lg">
                  <img className="w-12" src={`${process.env.PUBLIC_URL}/additive-icon.png`}/>
                  <h6>Additive Structure</h6>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-72 bg-[#FAF5F3] rounded-lg hover:bg-[#F1EBE6] p-8 shadow-lg">
                  <img className="w-12" src={`${process.env.PUBLIC_URL}/bio-icon.png`}/>
                  <h6>Bio-Based Insulation</h6>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-72 bg-[#FAF5F3] rounded-lg hover:bg-[#F1EBE6] p-8 shadow-lg">
                  <img className="w-12" src={`${process.env.PUBLIC_URL}/modular-icon.png`}/>
                  <h6>Modular Assembly</h6>
                </div>
              </div>
            </div>
            <p className="min-width text-center sm:text-left">Prototype V1 marks a step toward a scalable construction platform — <br />integrating material innovation, controlled production, and modular deployment.</p>
          </div>
        </div>
      </div>
    </>
  );
}
