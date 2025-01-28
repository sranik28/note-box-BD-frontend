import { Outlet } from "react-router-dom"
import Navbar from "../../page/authentication/Navbar"
import Footer from "../../page/authentication/home/Footer"

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Root
