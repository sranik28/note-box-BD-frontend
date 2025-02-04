import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className='md:min-h-[calc(100vh-100px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
