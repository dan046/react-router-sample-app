import { NavLink, Outlet } from "react-router-dom"
import NavStyle from "../components/NavStyle"

const ArticleLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <ul className="mb-5 flex flex-row gap-5 capitalize">
        <NavStyle>
          <NavLink to={"/"}>All</NavLink>
        </NavStyle>
        <NavStyle>
          <NavLink to="music">Music</NavLink>
        </NavStyle>
        <NavStyle>
          <NavLink to="entertainment">Entertainment</NavLink>
        </NavStyle>
      </ul>
      <Outlet />
    </div>
  )
}

export default ArticleLayout
