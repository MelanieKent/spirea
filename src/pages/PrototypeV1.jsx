export const PrototypeV1 = () => {
  return (
    <>
      <div
        className="h-screen w-screen pt-0 flex flex-col items-center justify-center text-xl text-left"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/prototype-v1-background-p1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex flex-col items-start justify-center gap-48">
          <div className="flex flex-col gap-6">
            <h4>PROTOTYPE V1</h4>
            <h1 className="text-4xl">Integrated Wall System <br />for Modular, Low-Carbon Construction</h1>
            <div className="flex flex-col gap-4 max-w-[40rem]">
              <p>Prototype V1 is an integrated wall system combining additive construction, bio-based insulation, and modular assembly within a unified construction logic.</p>
              <p>The system is designed to enable scalable production, deliver strong climate performance, and support multiple deployment methods.</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-6">
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
            <p className="min-width">Prototype V1 marks a step toward a scalable construction platform — <br />integrating material innovation, controlled production, and modular deployment.</p>
          </div>
        </div>
      </div>
    </>
  );
}
