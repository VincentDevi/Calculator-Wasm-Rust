type Props = {
  label: string,
  onClick: () => void
}
export const OperationButton = ({
  label,
  onClick
}: Props) => {
  return (
    <button
      className="w-16 h-16 bg-orange-400 text-gray-600 text-2xl font-semibold rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
