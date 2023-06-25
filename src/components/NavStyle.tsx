import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const NavStyle = ({ children }: Props) => {
  return (
    <li className="cursor-pointer rounded-md p-2 transition duration-300 ease-in-out hover:bg-violet-900">
      {children}
    </li>
  )
}

export default NavStyle
