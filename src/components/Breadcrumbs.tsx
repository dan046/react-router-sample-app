import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
  const location = useLocation()
  let currentLink = ""
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <div
          key={crumb}
          className="after:content-['>'] last:after:content-none"
        >
          <Link to={currentLink} className="underline underline-offset-2">
            {crumb}
          </Link>
        </div>
      )
    })
  return (
    <>
      {crumbs.toString() === "" ? (
        ""
      ) : (
        <div className="flex gap-2">
          <p>You are currently here: </p>
          <p className="flex">{crumbs}</p>
        </div>
      )}
    </>
  )
}

export default Breadcrumbs
