type Props = {
  label: string,
  onClick: () => void
}
export const UtilsButton = ({
  label,
  onClick
}: Props) => {
  return (
    <button
      className="w-16 h-16 bg-blue-500 text-orange-400 text-2xl font-semibold rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
