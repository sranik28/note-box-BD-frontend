import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";

export default function App() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
