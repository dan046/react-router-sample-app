import { NavLink } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header>
        <h1 className="text-2xl font-semibold">Well, that's disappointing.</h1>
      </header>
      <section className="text-center">
        <p>We couldn't found the page you were looking for.</p>
        <p className="underline">
          <NavLink to={"/"}>Click here to go back to homepage</NavLink>
        </p>
      </section>
    </div>
  )
}

export default PageNotFound
