export const Hero = () => {
  return (
    <div
      className="h-screen w-screen pt-0"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/hero-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="h-full flex items-center justify-center">
        <p>Hero</p>
      </div>
    </div>
  );
}
