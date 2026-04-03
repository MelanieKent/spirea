export const PrototypeV1 = () => {
  return (
    <>
      <div
        className="h-screen w-screen pt-0"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/prototype-v1-background-p1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
      </div>
      <div
        className="h-screen w-screen pt-0"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/prototype-v1-background-p2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
      </div>
    </>
  );
}
