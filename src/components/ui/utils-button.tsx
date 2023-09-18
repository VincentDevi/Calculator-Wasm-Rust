type Props = {
  label: string,
  onClick: () => void
}
export const UtilsButton = ({
  label,
  onClick
}: Props) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
