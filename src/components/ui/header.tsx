type Props = {
  title: string,
  subTitle?: string
}
export const Header = ({ title, subTitle }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </>
  )
}
