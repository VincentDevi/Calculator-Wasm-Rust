type Props = {
  title: string,
  subTitle?: string
}
export const Header = ({ title, subTitle }: Props) => {
  return (
    <header
      className="flex flex-col gap-1 items-center justify-center text-justify"
    >
      <h1
        className="text-2xl font-bold text-center"
      >
        {title}
      </h1>
      <h2
        className="text-lg font-normal text-center"
      >
        {subTitle}
      </h2>
    </header>
  )
}
