type Props = {
  label: string,
  onClick: () => void
}
export const OperationButton = ({
  label,
  onClick
}: Props) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
