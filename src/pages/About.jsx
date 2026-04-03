export const About = () => {
  return (
    <>
      <div
        className="h-screen w-screen pt-0"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/about-background-p1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
      </div>
      <div
        className="h-screen w-screen pt-0"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/about-background-p2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
      </div>
    </>
  );
}
