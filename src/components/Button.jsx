const PrimaryButton = ({
  children
}) => {
  return (
    <button className="bg-[#546C61] text-white px-4 py-2 rounded-lg hover:bg-[#829276]">
      {children}
    </button>
  )
}

const SecondaryButton = ({
  children
}) => {
  return (
    <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#546C61] hover:border-[#829276] hover:text-[#829276]">
      {children}
    </button>
  )
}

export {
  PrimaryButton,
  SecondaryButton
}