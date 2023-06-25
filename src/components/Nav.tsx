import { NavLink } from "react-router-dom"
import NavStyle from "./NavStyle"

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-5 capitalize">
        <NavStyle>
          <NavLink to={"/"}>News</NavLink>
        </NavStyle>
        <NavStyle>
          <NavLink to={"about"}>About</NavLink>
        </NavStyle>
        <NavStyle>
          <NavLink to={"contact"}>Contact</NavLink>
        </NavStyle>
      </ul>
    </nav>
  )
}

export default Nav
