type Props = {
  label: string,
  onClick: () => void
}
export const NumberButton = ({
  label,
  onClick
}: Props) => {
  return (
    <button
      className="w-16 h-16 bg-gray-300 text-blue-800 text-2xl font-semibold rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
