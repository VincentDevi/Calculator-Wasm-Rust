import { ReactNode } from "react"

type Props = {
  header: ReactNode,
  children: ReactNode
}
export const Layout = ({
  header, children
}: Props) => {
  return (
    <div
      className="flex flex-col gap-8 justify-center items-center mt-6"
    >
      <div
        className="w-full flex justify-center"
      >
        {header}
      </div>
      <div className="w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}
