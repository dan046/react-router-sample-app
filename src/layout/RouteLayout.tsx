import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Footer from "../components/Footer"
import Breadcrumbs from "../components/Breadcrumbs"

// Navbar, Body, Footer
const RouteLayout = () => {
  return (
    <div className="mx-auto flex h-screen flex-col justify-between">
      <header className="focus-within flex flex-col items-center justify-between p-5 md:flex-row md:gap-0">
        <Logo />
        <Nav />
      </header>
      <div className="p-5">
        <Breadcrumbs />
      </div>
      <main className="m-5 md:m-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RouteLayout
