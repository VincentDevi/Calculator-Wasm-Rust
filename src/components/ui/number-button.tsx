type Props = {
  label: string,
  onClick: () => void
}
export const NumberButton = ({
  label,
  onClick
}: Props) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
