import { NavLink } from "react-router-dom"

const Logo = () => {
  return (
    <h1 className="bg-gradient-to-r from-purple-100 via-sky-500 to-indigo-950 bg-clip-text text-2xl font-semibold uppercase text-transparent">
      <NavLink to={"/"}>Nippon Midnight News</NavLink>
    </h1>
  )
}

export default Logo
