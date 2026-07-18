import "./styles/Default.css"

export const Contact = () => {
  return (
    <div className="bg-default min-h-screen w-screen flex flex-col items-center justify-center py-32">
      <img className="w-screen lg:mb-[-6rem]" src={`${process.env.PUBLIC_URL}/curves.png`} />
      <div className="w-screen flex flex-col items-center justify-center gap-20 px-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl">
            Contact
          </h1>
          <p className>We welcome inquiries across collaboration, research, and strategic development.</p>
          <hr className="border-t border-[#829276] opacity-40"></hr>
          <div>
            <p>General Inquiries</p>
            <a className="no-underline hover:underline underline-offset-4" href="mailto:info@spireaplatform.ca">info@spireaplatform.ca</a>
          </div>
          <div>
            <p>Strategic Partnerships</p>
            <a className="no-underline hover:underline underline-offset-4" href="mailto:julia@spireaplatform.ca">julia@spireaplatform.ca</a>
          </div>
          <p>Vancouver, Canada</p>
        </div>
        <div>
          <p>Spirea is building a new system for scalable, low-carbon infrastructure.</p>
        </div>
      </div>
    </div>
  );
}
