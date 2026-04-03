const PrimaryButton = ({
  children
}) => {
  return (
    <button className="bg-[#626D65] text-white px-4 py-2 rounded-lg hover:bg-[#829276]">
      {children}
    </button>
  )
}

const SecondaryButton = ({
  children
}) => {
  return (
    <button className="bg-transparent px-4 py-2 rounded-lg border border-[#626D65] hover:border-[#829276] hover:text-[#829276]">
      {children}
    </button>
  )
}

export {
  PrimaryButton,
  SecondaryButton
}