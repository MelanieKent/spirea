export const PrimaryButton = ({
  children
}) => {
  return (
    <button className="bg-[#404E35] text-white px-4 py-2 rounded-lg hover:bg-[#829276]">
      {children}
    </button>
  )
}