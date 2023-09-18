import { ReactNode } from "react"

type Props = {
  header: ReactNode,
  children: ReactNode
}
export const Layout = ({
  header, children
}: Props) => {
  return (
    <>
      <div>
        {header}
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
